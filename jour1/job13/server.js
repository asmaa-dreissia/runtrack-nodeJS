const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Récupérer l'URL demandée
    const url = req.url;

    // Définir le chemin du fichier à servir en fonction de l'URL
    let filePath = '';
    if (url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else {
        // Si l'URL demandée n'est pas reconnue, retourner une erreur 404
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Erreur 404: Page non trouvée');
        return;
    }

    // Lire le contenu du fichier demandé
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Si une erreur survient lors de la lecture du fichier, retourner une erreur 500
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erreur interne du serveur');
            return;
        }

        // Définir l'en-tête de la réponse avec le type de contenu approprié
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Envoyer le contenu du fichier demandé dans le corps de la réponse
        res.end(data);
    });
});

const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Le serveur est démarré et écoute sur le port ${PORT}.`);
});
