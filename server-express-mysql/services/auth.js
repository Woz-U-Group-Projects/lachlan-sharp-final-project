const jsonWebToken = require('jsonwebtoken');
const models = require('../models/index');
const bcrypt = require('bcryptjs');


var authenticationService = {
    signUser: (user) => {
        const token = jsonWebToken.sign(
            {
                username: user.username,
                iduser: user.iduser
            },
            'codeMonkeyKey',
            {
                expiresIn: '1h'
            }
        );
        return token;
    },
    verifyUser: (token) => {
        try {
            let decoded = jsonWebToken.verify(token, 'codeMonkeyKey');
            return models.users.findByPk(decoded.iduser);
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    hashPassword: (plainTextPassword) => {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(plainTextPassword, salt);
        return hash;
    },
    comparePasswords: (plainTextPassword, hashedPassword) => {
        return bcrypt.compareSync(plainTextPassword, hashedPassword)
    }
}


module.exports = authenticationService;