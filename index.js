const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const connexion = require("./data/connexionBdd.js");
const router = require("router");
const app = express();
// On conditionne le framework pour l'usage du json
app.use(express.json());
// On déclare une variable qui contient le port
const port = 3000;


app.post('/login', (req, res) => {
    const { mail, password } = req.body;
    const found = finUserWithMailAndPass(mail,password);
    if (found) {
        return res.status(200).json({
            success: true,
            message: "Connexion validée",
            id: found.id,
            role: found.role
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "Connexion refusée"
        });
    };        
});
    

app.use(router);
// On initialise le serveur et son port d'écoute
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});