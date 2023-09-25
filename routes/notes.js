const express = require('express');
const router = express.Router();
const Note = require('../models/note'); // Import the Note model

router.post('/create', async (req, res) => {
  // Controller logic for creating a note will go here
});

module.exports = router;
