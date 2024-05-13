const fs = require('fs');

// Chemin du fichier data.txt
const filePath = 'data.txt';

// Lire le contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }

    // Afficher une lettre sur deux dans le terminal
    console.log('Lettres sur deux du contenu du fichier:');
    for (let i = 0; i < data.length; i += 2) {
        console.log(data[i]);
    }
});

