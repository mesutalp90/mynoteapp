import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      newNote: '',
    };
  }

  // Function to handle input changes when creating a new note
  handleInputChange = (event) => {
    this.setState({ newNote: event.target.value });
  };

  // Function to add a new note to the list
  addNote = () => {
    if (this.state.newNote.trim() === '') {
      return; // Prevent adding empty notes
    }

    const newNotes = [...this.state.notes, this.state.newNote];
    this.setState({ notes: newNotes, newNote: '' });
  };

  // Function to delete a note by index
  deleteNote = (index) => {
    const newNotes = [...this.state.notes];
    newNotes.splice(index, 1);
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>My Note-Taking App</h1>
        </header>
        <main>
          <div className="note-input">
            <input
              type="text"
              placeholder="Enter your note"
              value={this.state.newNote}
              onChange={this.handleInputChange}
            />
            <button onClick={this.addNote}>Add Note</button>
          </div>
          <ul className="note-list">
            {this.state.notes.map((note, index) => (
              <li key={index}>
                {note}
                <button onClick={() => this.deleteNote(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
