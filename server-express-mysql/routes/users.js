var express = require('express');
var router = express.Router();
var models = require('../models');
var mysql = require('mysql2');
var authenticationService = require('../services/auth');



router.post('/signup', function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        username: req.body.username
      },
      defaults: {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: authenticationService.hashPassword(req.body.password),
        age: req.body.age
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.send('User successfully created');
      } else {
        res.send('This user already exists');
      }
    });
});

router.post('/', (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);
  models.users
    .findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if (!user) {
        console.log(`User not found`);
        return res.status(401).json({
          message: "Login Failed"
        });
      } else {
        let passwordMatch = authenticationService.comparePasswords(req.body.password, user.password);
        if (passwordMatch) {
          let token = authenticationService.signUser(user);
          res.cookie('jwt', token);
          res.json(user);
        } else {
          console.log('Wrong Password');
          res.send('Wrong Password');
        }
      }
    })
    .then(data => res.send(data))
})



module.exports = router;