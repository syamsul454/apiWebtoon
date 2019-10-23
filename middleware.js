const jwt = require('jsonwebtoken')

module.exports = {
authenticated: (req,res, next) => {
  const token = req.headers.authorization
  console.log(token)
    try {
      var decoded = jwt.verify(token,'secret_key');
      console.log(decoded)
      req.authorize_user = decoded;
      next();
    } catch(err) {
      res.status(401).json({
        message: 'Token is Invalid'
      });
    }
  },
};