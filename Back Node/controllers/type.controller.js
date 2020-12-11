const Type = require('../models').Type;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Property = require('../models').Property;

exports.type_add = (req, res, next) => {
    let type = req.body;
    Type.create(type)
    .then( data => res.status(201).json({
      typeName: data.typeName,
    }))
    .catch( err => console.log(err))
}

exports.type_list = (req, res, next) => {
    Type.findAll({
      attributes: ['id', 'typeName']
    })
    .then( types => res.status(200).json(types))
    .catch(err => console.log(err))
}

exports.type_detail = (req, res, next) =>{
    const id = req.params.id;
    Type.findAll({
        attributes: ['id', 'typeName'],
        where: {id : id},
        include: [
            {
                model: Property,
                attributes: ['id','title', 'TypeId', 'UserId'],
            }
        ]
    })
    .then(type => res.status(200).json(type))
    .catch(err => console.log(err))
}

exports.type_edit = (req, res, next) =>{
    const id = req.params.id;
    const type = req.body;
    Type.update(type, {
    where: {
        id: id
    }
    })
    .then(() => {
    res.status(200).json({message: 'Type updated'})
    })
    .catch(err => console.log(err))
}

exports.type_delete = (req, res, next) =>{
    const id = req.params.id;
    Type.destroy({
    where: {
        id: id
    }
    })
    .then(Type => res.status(200).json({message: 'Type deleted'}))
    .catch(err => console.log(err))
}