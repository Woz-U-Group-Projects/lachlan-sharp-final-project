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




module.exports = router;