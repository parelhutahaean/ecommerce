var Item = require('../models/item')

var methods = {}

methods.insert = (req, res) => {
  Item.create(req.body, (err, item) => {
    if(err) res.send({err})
    res.send(item)
  })
}

methods.findAll = (req, res) => {
  Item.find({}, (err, items) => {
    if(err) res.send({err})
    res.send(items)
  })
}

methods.findById = (req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if(err) res.send({err})
    res.send(item)
  })
}

methods.update = (req, res) => {
  Item.update({ _id: req.params.id }, {
    $set: req.body
  }, (err, item) => {
    if (err) res.send({err})
    res.send(result)
  })
}

methods.delete = (req, res) => {
  Item.remove({ _id: req.params.id }, (err, item) => {
    if (err) res.send({ err })
    res.send(item)
  });
}

module.exports = methods
