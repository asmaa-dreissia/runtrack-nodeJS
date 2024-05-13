const http = require('http');

// Fonction de rappel qui sera exécutée à chaque requête
const requestHandler = (request, response) => {
    // Définir l'en-tête de la réponse avec le code de statut 200 (OK) et le type de contenu text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Écrire le message "Hello World !" dans le corps de la réponse
    response.end('Hello World !\n');
};

// Créer le serveur en utilisant la fonction createServer() de l'objet http
const server = http.createServer(requestHandler);

// Écouter les requêtes entrantes sur le port 8888
server.listen(8888, (err) => {
    if (err) {
        return console.error('Erreur lors de l\'écoute du port 8888 :', err);
    }
    console.log('Le serveur est démarré et écoute sur le port 8888.');
});
