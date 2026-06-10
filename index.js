const express = require("express");
const sqlite3 = require('sqlite3').verbose();
const app = express();
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
// On exécute une requête SELECT
bddCliniquePlus.serialize(() => {
    bddCliniquePlus.each(`SELECT id, mail, password, role FROM users`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(`${row.id}: ${row.mail} - ${row.role}`);
    });
});


// On déclare un tableau avec une BDD simulée
const users = [
    { mail: "Alice@gmail.com", id: 0, pass: "azerty" },
    { mail: "Bob@gmail.com", id: 1, pass: "qwerty" },
    { mail: "Charlie@gmail.com", id: 2, pass: "qwertz" },
];

// Création et traitement du endpoint de connexion
app.post('/login', (req, res) => {
    // Récupérer les données de connexion depuis le corps de la requête
    const { mail, password } = req.body;
    // Rechercher l'utilisateur dans la liste des utilisateurs
    const utilisateur =
        users.find(user => user.mail === mail && user.pass === password);
    // Si l'utilisateur est trouvé, retourner un succès avec son ID
    if (utilisateur) {
        return res.status(200).json({
            success: true,
            message: "Connexion validée",
            id: utilisateur.id
        });
    }else{
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