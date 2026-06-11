export default function findUserWithMailAndPass(mail,password) { 
bddCliniquePlus.get(`SELECT id, mail, password, role FROM users WHERE mail = ? AND password = ?`, [mail,password], (err, ligne) => {
            if (err) {
                console.error(err.message);
                return res.status(500); 
            });
};

//module.exports = {};