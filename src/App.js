import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    // Fetch notes from your server when the component mounts
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes'); // Replace with your actual API endpoint
      setNotes(response.data); // Update the notes state with the fetched data
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const createNote = async (title, content) => {
    try {
      const response = await axios.post('/api/notes/create', {
        title,
        content,
        userId: 'yourUserId', // Replace with the actual user ID
      });
      console.log(response.data.message); // Check the server's response
      fetchNotes(); // Refresh the list of notes after creating a new one
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div>
      <h1>My Note App</h1>
      <NoteForm createNote={createNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
