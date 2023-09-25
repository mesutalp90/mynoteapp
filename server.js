require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

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
