const jwt = require('jsonwebtoken');

module.exports = () => {
  return  (req, res, next) => {
    if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1]
    try {
      if(jwt.decode(token).status == "admin" || jwt.decode(token).status=="agent"){
        next();
      }
      else {
        res.status(401).json({ message: "Vous devez être administrateur ou agent pour accéder à cette page"});
      }
    } catch (error) {
      res.status(401).json({ message: "Authentication KO - failed"});
    }
  }
    else{
      res.status(401).json({ message: "Authentication KO - failed"});
    }
  }
}