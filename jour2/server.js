const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Fonction de traitement de la requête
const requestHandler = (req, res) => {
  // Analyser l'URL de la requête
  const parsedUrl = url.parse(req.url, true);

  // Récupérer le chemin de l'URL
  let filePath = '.' + parsedUrl.pathname;

  // Si le chemin est '/' (racine), utiliser index.html
  if (filePath === './') {
    filePath = './index.html';
  }

  // Récupérer l'extension du fichier demandé
  const extname = path.extname(filePath);

  // Déterminer le type de contenu en fonction de l'extension
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  // Lire le fichier demandé depuis le système de fichiers
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Gérer les erreurs de lecture du fichier
      if (err.code === 'ENOENT') {
        // Fichier non trouvé
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        // Autre erreur
        res.writeHead(500);
        res.end(`500 Internal Server Error: ${err.code}`);
      }
    } else {
      // Fichier lu avec succès, envoyer le contenu en réponse
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data, 'utf-8');
    }
  });
};

// Créer le serveur et exporter la fonction de traitement de la requête
const server = http.createServer(requestHandler);
module.exports = server;
