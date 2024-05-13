const url = require('url');

// Définition de l'URL
const URL = "https://www.google.com&search=nodejs";

// Analyse de l'URL
const parsedUrl = new url.URL(URL);

// Récupérer le protocole utilisé
const protocol = parsedUrl.protocol;
console.log('Protocole utilisé :', protocol);

// Récupérer le nom d'hôte
const hostname = parsedUrl.hostname;
console.log('Nom d\'hôte :', hostname);

// Récupérer les paramètres de l'URL
const searchParams = parsedUrl.searchParams;
console.log('Paramètres de l\'URL :', searchParams.toString());

// Reformater l'URL avec un nouveau nom d'hôte
parsedUrl.hostname = 'www.laplateforme.io';

// Ajouter un paramètre à la nouvelle URL
parsedUrl.searchParams.append('newParam', 'valeur');

// Afficher la nouvelle URL dans le terminal
console.log('Nouvelle URL :', parsedUrl.href);
