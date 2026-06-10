// On importe le framework Express
const express = require("express");
// Le framework est chargé dans app
const app = express();
// On conditionne le framework pour l'usage du json
app.use(express.json());
// On déclare une variable qui contient le port
const port = 3000;

// On simule une BDD grâce à ce tableau d'utilisateurs
const users = [
    { mail: "Alice@gmail.com", id: 0, pass: "azerty" },
    { mail: "Bob@gmail.com", id: 1, pass: "qwerty" },
    { mail: "Charlie@gmail.com", id: 2, pass: "qwertz" }
];
// Premier contact
app.get('/handshake', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req,res) => {
    const { mail , password } = req.body;
    console.log(mail);
});
app.get('/admin', (req,res) => {

});

// On lance l'exécution du serveur - IMPORTANT, le lancement du serveur est touujours en dernier.
app.listen(port, (port) => {
    console.log("Serveur démarré sur le port ", port);
});