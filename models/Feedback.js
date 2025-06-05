const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: String,
  comment: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
