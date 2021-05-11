var express = require('express');
var router = express.Router();
var models = require('../models');
var mysql = require('mysql2');
var authenticationService = require('../services/auth');



router.post('/signup', function (req, res, next) {
  console.log(req.body)
  models.users
    .findOrCreate({
      where: {
        username: req.body.username
      },
      defaults: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: authenticationService.hashPassword(req.body.password),
        age: req.body.age
      }
    })
    .spread(function (result, created) {
      if (created) {
        console.log('User successfully created');
      } else {
        console.log('User already exists');
      }
    })
    .catch(err => {
      if(err.response) {
        console.log(error.response.data, error.response.status, error.response.headers)
      }
      console.log(err.message);
    });
});

router.post('/', (req, res, next) => {
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

router.post('/userBlogs', (req, res, next) => {
  models.blogposts
    .findAll({
      where: {
        iduser: req.body.userID
      }
    })
    .then(blogs => res.json(blogs));
})

router.post('/createBlogPost', (req, res, next) => {
  models.blogposts
    .findOrCreate({
      where: {
        blogContent: req.body.blogContent
      }
    })
})



module.exports = router;