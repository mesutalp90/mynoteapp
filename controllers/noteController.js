// controllers/noteController.js

const Note = require('../models/note');

// Controller function for creating a new note
const createNote = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    // Create a new note and save it to the database
    const newNote = new Note({ title, content, userId });
    await newNote.save();

    res.status(201).json({ message: 'Note created successfully' });
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createNote,
  // Export other controller functions as well
};
