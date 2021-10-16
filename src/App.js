import React from 'react'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {

  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNote = JSON.parse(
    localStorage.getItem('it-is-my-key')
    )

    if(savedNote) {
      setNotes(savedNote)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'it-is-my-key',
      JSON.stringify(notes)
    )
  }, [notes])

  const addNote = (text) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    const newNote = {
      id: nanoid(),
      text: text,
      // date: date.getDate()  //.toLocaleDateString('en-GB')
      date: today
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
          handleAddNotes={addNote} 
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
    
  );
}

export default App;
