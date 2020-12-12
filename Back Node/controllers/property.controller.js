const Property = require('../models').Property;
const Option = require('../models').Option;
const User = require('../models').User;
const jwt = require('jsonwebtoken');

exports.property_list = (req, res, next) => {
  Property.findAll({
    attributes: ['id', 'price', 'title', 'location', 'room', 'description', 'picture', 'TypeId', 'UserId'],
    include: [
      {
         model: Option,
         attributes: ['id','option'],
         through: { attributes: []} 
      },
      {
        model: User,
        attributes: ['id','name', 'picture']
     }
    ]
  })
  .then( properties => res.status(200).json(properties))
  .catch(err => console.log(err))
}

exports.property_add = (req, res, next) => {
  const property = req.body;
  const token = req.headers.authorization.split(" ")[1];
  property.UserId = jwt.decode(token).id;
  Property.create(property)
  .then(propertyCreated => {
    propertyCreated.setOptions(req.body.Options)
    .then( data => res.status(201).json(propertyCreated))
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
}

exports.property_detail = (req, res, next) =>{
  const id = req.params.id;
    Property.findByPk(id)
    .then(property => res.status(200).json(property))
    .catch(err => console.log(err))
  }

exports.property_edit = (req, res, next) =>{
  const id = req.params.id;
  const property = req.body;
    Property.update(property, {
      where: {
        id: id
      }
    })
    .then(() => {
      res.status(200).json({message: 'property updated'})
    })
    .catch(err => console.log(err))
  }

  exports.property_delete = (req, res, next) =>{
    const id = req.params.id;
      Property.destroy({
        where: {
          id: id
        }
      })
      .then(property => res.status(200).json({message: 'property deleted'}))
      .catch(err => console.log(err))
    }
  