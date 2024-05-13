const fs = require('fs');

// Chemin du fichier data.txt
const filePath = 'data.txt';

try {
    // Lire le contenu du fichier de manière synchrone
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Afficher le contenu dans le terminal
    console.log('Contenu du fichier:');
    console.log(content);
} catch (error) {
    console.error('Erreur lors de la lecture du fichier:', error);
}
