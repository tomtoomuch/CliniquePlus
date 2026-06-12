const {bddCliniquePlus} = require('../data/connexionBdd');

function findUserWithMailAndPass(mail,password, callback) { 
    bddCliniquePlus.get(
        `SELECT id, mail, password, role FROM users WHERE mail = ? AND password = ?`,
        [mail,password],
        (err, row) => {
        if (err) {
            return callback(err,null);
        }
        return callback(null,row);
        }
    );
}

module.exports = { findUserWithMailAndPass };