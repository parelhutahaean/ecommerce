var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  out_date: Date,
  due_date: Date,
  in_date: Date,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
