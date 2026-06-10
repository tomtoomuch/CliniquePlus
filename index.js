const express = require("express");
const app = express();
// On conditionne le framework pour l'usage du json
app.use(express.json());
// On déclare une variable qui contient le port
const port = 3000;
// On déclare un tableau avec une BDD simulée
const users = [
    { mail: "Alice@gmail.com", id: 0, pass: "azerty" },
    { mail: "Bob@gmail.com", id: 1, pass: "qwerty" },
    { mail: "Charlie@gmail.com", id: 2, pass: "qwertz" },
];

app.post('/login', (req, res) => {
    // Récupérer les données de connexion depuis le corps de la requête
    const { mail, pass } = req.body;

    // Rechercher l'utilisateur dans la liste des utilisateurs
    const user = users.find(
        u => u.mail === mail && u.pass === pass
    );

    // Si l'utilisateur est trouvé, retourner un succès avec son ID
    if (user) {
        return res.status(200).json({
            success: true,
            message: "Connexion validée",
            id: user.id
        });
    }

    // Sinon, retourner une erreur d'authentification
    return res.status(401).json({
        success: false,
        message: "Connexion refusée"
    });
});

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});