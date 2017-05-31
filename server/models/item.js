var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  price: Number,
  stock: Number
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item
