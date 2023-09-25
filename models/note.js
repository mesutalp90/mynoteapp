const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: String, // You may use a different data type for the user ID
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
