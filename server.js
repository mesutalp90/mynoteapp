require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRoutes = require('./routes/notes'); // Import the notes route

const app = express();

// ...

// Use CORS middleware
app.use(cors());

// ...

// Use the notes route
app.use('/api/notes', noteRoutes);

// ...

// Start your server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Use the environment variable in your connection string
const connectionString = process.env.MONGODB_URI;

// Rest of your MongoDB connection code remains the same
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Optional, but recommended
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
