const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route pour la page "about"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Route pour gérer les erreurs 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  });

// Lancement du serveur sur le port 80
app.listen(PORT, () => {
  console.log(`Serveur web démarré sur http://localhost:${PORT}`);
});
