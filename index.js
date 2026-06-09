// On importe le framework Express
const express = require("express");
// Le framework est chargé dans app
const app = express();





// On lance l'exécution du serveur - IMPORTANT, le lancement du serveur est touujours en dernier.
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});