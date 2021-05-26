const mongooose = require('mongoose');

const Visitor = mongooose.model('Visitor', new mongooose.Schema({
  ip: {
    type: String,
    required: true,
    unique: true
  }
}))

module.exports = Visitor;