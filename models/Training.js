const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: String,
  sport: String
});

module.exports = mongoose.model('Training', trainingSchema);
