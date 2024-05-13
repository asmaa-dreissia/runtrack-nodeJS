const fs = require('fs');

// Chemin du fichier data.txt
const filePath = 'data.txt';

// Lire le contenu du fichier de manière asynchrone
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }

    // Construire une chaîne de caractères avec une lettre sur deux
    let everyOtherLetter = '';
    for (let i = 0; i < data.length; i += 2) {
        everyOtherLetter += data[i];
    }

    // Afficher la chaîne de caractères dans le terminal
    console.log('Lettres sur deux du contenu du fichier:');
    console.log(everyOtherLetter);
});


