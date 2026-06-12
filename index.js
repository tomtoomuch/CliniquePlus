const express = require("express");

const connexion = require("./data/connexionBdd");
const userModel = require("./models/modeleUtilisateurs");
const controllers = require("./controllers/controleurUtilisateurs");
const router = require("./routes/routeurUtilisateurs");

const app = express();

// On conditionne le framework pour l'usage du json
app.use(express.json());
// On déclare une variable qui contient le port
const port = 3000;


router.post('/login', (req, res) => {
    
    const { mail, password } = req.body;
    
    console.log(mail,password);
    
    userModel.findUserWithMailAndPass(mail,password, (err,user) => {
    
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

        return res.redirect([301] `./${user.role}`);

        }
    
        return res.status(401).json({
    
            success: false,
    
            message: "Connexion refusée"
    
        });

    });


});

router.get('/patients', (req,res) => {
    
});

router.get('/medecins', (req,res) => {
    
});
    

app.use(router);
// On initialise le serveur et son port d'écoute
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});