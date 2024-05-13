const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Récupérer le chemin absolu du fichier index.html
    const filePath = path.join(__dirname, 'index.html');

    // Lire le contenu du fichier index.html
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Erreur interne du serveur');
            return;
        }

        // Définir l'en-tête de la réponse avec le code de statut 200 (OK) et le type de contenu text/html
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Envoyer le contenu du fichier index.html dans le corps de la réponse
        res.end(data);
    });
});

const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Le serveur est démarré et écoute sur le port ${PORT}.`);
});
