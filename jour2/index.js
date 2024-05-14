const server = require('./server');

// Définir le port sur lequel le serveur écoutera
const PORT = process.env.PORT || 3000;

// Démarrer le serveur et le faire écouter sur le port spécifié
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
