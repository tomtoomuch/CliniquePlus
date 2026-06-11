const express = require("express");
const sqlite3 = require('sqlite3').verbose();
const app = express();
const userModele = require('./Modele/user.js');

const router = express.Router();

// On conditionne le framework pour l'usage du json
app.use(express.json());
// On déclare une variable qui contient le port
const port = 3000;




// On connecte la base de données
let bddCliniquePlus = new sqlite3.Database('./CliniquePlus.db', sqlite3.OPEN_READONLY, (err) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log('Connecté à la base de données.');
    }
});


// Déclaration de la route et du traitement des données POST

router.post('/login', (req, res) => {

    const { mail, password } = req.body;

    userModele.findUserByMailAndPassword(mail, password, (err, user) => {

        if (err) {
            return res.status(500).json({ success: false });
        }

        if (user) {
            return res.status(200).json({
                success: true,
                message: "Connexion validée",
                id: user.id,
                role: user.role
            });
        }

        return res.status(401).json({
            success: false,
            message: "Connexion refusée"
        });
    });
});



app.use(router);



// On initialise le serveur et son port d'écoute
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});