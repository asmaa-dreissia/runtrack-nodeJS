const fs = require('fs');

// Chemin du fichier data.txt
const filePath = 'data.txt';

// Lire le contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }

    // Afficher le contenu dans le terminal
    console.log('Contenu du fichier:');
    console.log(data);
});
