const Option = require('../models').Option;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Property = require('../models').Property;

exports.option_add = (req, res, next) => {
    let option = req.body;
    Option.create(option)
    .then( data => res.status(201).json({
      option: data.option,
    }))
    .catch( err => console.log(err))
}

exports.option_list = (req, res, next) => {
    Option.findAll({
    })
    .then( options => res.status(200).json(options))
    .catch(err => console.log(err))
}

exports.option_detail = (req, res, next) =>{
    const id = req.params.id;
    Option.findByPk(id)
    .then(style => res.status(200).json(style))
    .catch(err => console.log(err))
}

exports.option_edit = (req, res, next) =>{
    const id = req.params.id;
    const option = req.body;
    Option.update(option, {
    where: {
        id: id
    }
    })
    .then(() => {
    res.status(200).json({message: 'option updated'})
    })
    .catch(err => console.log(err))
}

exports.option_delete = (req, res, next) =>{
    const id = req.params.id;
    Option.destroy({
    where: {
        id: id
    }
    })
    .then(option => res.status(200).json({message: 'option deleted'}))
    .catch(err => console.log(err))
}