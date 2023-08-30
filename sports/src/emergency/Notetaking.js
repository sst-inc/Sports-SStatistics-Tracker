import React, { useState } from 'react';

function NoteTaking() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addNote = () => {
    if (currentNote.trim() !== '') {
      if (editingIndex !== -1) {
        // Update existing note
        const updatedNotes = [...notes];
        updatedNotes[editingIndex] = currentNote;
        setNotes(updatedNotes);
        setEditingIndex(-1);
      } else {
        // Add new note
        setNotes([...notes, currentNote]);
      }
      setCurrentNote('');
    }
  };

  const editNote = (index) => {
    setCurrentNote(notes[index]);
    setEditingIndex(index);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notetaking</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
        />
        <button onClick={addNote}>
          {editingIndex !== -1 ? 'Update Note' : 'Add Note'}
        </button>
      </div>
      <div>
        <h2>Notes</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note}
              <button onClick={() => editNote(index)}>Edit</button>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NoteTaking;
