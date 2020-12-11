const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Property = require('../models').Property;

exports.user_add = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) =>{
    if(err){
      throw err
    }
    let user = req.body;
    user.password = hash;
    User.create(user)
    .then( data => res.status(201).json({
      login: data.login,
      status: data.status,
      name: data.name
    }))
    .catch( err => console.log(err))
    }
  )
}

exports.user_login = (req, res, next) => {
  User.findOne({
    where: {
      login: req.body.login
    }
  })
  .then(user => {
    if(user){
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if(err) return res.status(500).json(err)
        else {
          if(result) {
            const token = jwt.sign({ login: user.login, id: user.id, status: user.status}, process.env.SECRET_PHRASE, { expiresIn: '365d'})
            res.status(200).json({
              token: token,
              status: user.status
            })
          }
          else return res.json({ message: 'You fail' })
        }
      })
    }
    else {
      res.status(404).json({ message: 'Bad login / password'})
    }
  })
  .catch(error => {
    res.status(500).json(error);
  })
}

exports.user_list = (req, res, next) => {
    User.findAll({
      attributes: ['id', 'name', 'age', 'phone', 'status', 'picture', 'login']
    })
    .then( Users => res.status(200).json(Users))
    .catch(err => console.log(err))
}

exports.user_detail = (req, res, next) =>{
    const id = req.params.id;
    User.findAll({
        attributes: ['id', 'name', 'age'],
        where: {id : id},
        include: [
            {
                model: Property,
                attributes: ['id','title', 'UserId'],
            }
        ]
    })
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))
}

exports.user_edit = (req, res, next) =>{
    const id = req.params.id;
    const user = req.body;
    User.update(user, {
    where: {
        id: id
    }
    })
    .then(() => {
    res.status(200).json({message: 'user updated'})
    })
    .catch(err => console.log(err))
}

exports.user_delete = (req, res, next) =>{
    const id = req.params.id;
    User.destroy({
    where: {
        id: id
    }
    })
    .then(user => res.status(200).json({message: 'user deleted'}))
    .catch(err => console.log(err))
}