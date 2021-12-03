const mongoose = require('mongoose');

const { Schema } = mongoose;

const xSchema = new Schema({
  user: 'Joey', // { type: String, required: true, unique: true },
  ticker: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('User', xSchema);
