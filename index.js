const express = require("express");
const sqlite3 = require('sqlite3').verbose();
const app = express();
// On conditionne le framework pour l'usage du json
app.use(express.json());
// On déclare une variable qui contient le port
const port = 3000;
let utilisateur;
// On connecte la base de données
let bddCliniquePlus = new sqlite3.Database('./CliniquePlus.db', sqlite3.OPEN_READONLY, (err) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log('Connecté à la base de données.');

    }
});

// On déclare la fonction pour interroger la BDD
function interrogationBase (mail,password) {
    bddCliniquePlus.serialize(() => {
        bddCliniquePlus.get(`SELECT id, mail, password, role FROM users WHERE users.mail = '${mail}' AND users.password = '${password}';`, (err, ligne) => {
            if (err) {
                console.error(err.message);
                return res.status(500); 
            }        
        return ligne;
        });
    });
};

// Déclaration de la route et du traitement des données POST
app.post('/login', (req, res) => {
    // Récupérer les données de connexion depuis le corps de la requête
    //console.log(req);
    const { mail, password } = req.body;
    let utilisateur = interrogationBase(mail,password);
    // Si l'utilisateur est trouvé, retourner un succès avec son ID
    if (utilisateur) {
        return res.status(200).json({
            success: true,
            message: "Connexion validée",
            id: ligne.id
            });
    } else {
        // Sinon, retourner une erreur d'authentification
        return res.status(401).json({
            success: false,
            message: "Connexion refusée"
        });
    };
});



// On initialise le serveur et son port d'écoute
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});