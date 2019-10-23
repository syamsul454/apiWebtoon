const jwt = require('jsonwebtoken')
const models = require('../models')
const bcrypt = require('bcrypt');
const user = models.user

module.exports = {
signUp: (req, res) => {
     console.log(req.body)
    user.create({
        email : req.body.email,
        password : req.body.password,
        name : req.body.name
  }).then((user) => {
    res.status(201).json({
      message: `Success Sign Up New User`,
      user
    });
  }).catch((err) => {
    res.status(500).json({
      message: err.message
    });
  });
  },
  signIn: (req,res) => {
     console.log(req.body)
    user.findOne({
      where: {
            email : req.body.email
      }
    }).then((user) => {
      const checkLogin = bcrypt.compareSync(req.body.password,user.password);
      if (checkLogin) {
        console.log('login berhasil')
        var token = jwt.sign({ id: user.id },'secret_key');
        const email = user['email']
        const id = user['id']
        if (token) {
          res.status(200).json({
            message: "Success Sign In",
            email : email,
            token: token,
            id : id

          });
        }
      } else {
        res.status(200).json({
          message: "Failed Sign In",
        });
      }
    }).catch((err) => {
      res.status(200).json({
        message: err.message,
      });
    });
  },
};