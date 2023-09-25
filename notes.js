// routes/notes.js

const express = require('express');
const router = express.Router();
const { createNote } = require('../controllers/noteController');

// POST /api/notes/create - Create a new note
router.post('/create', createNote);

module.exports = router;
