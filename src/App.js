import { useState } from 'react';
import './App.css'
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import { SearchNote } from './components/SearchNote';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "hello! I'm a note!",
    date: "14/2/1998",
  },
  {
    id: nanoid(),
    text: "hello! I'm a note 2!",
    date: "14/2/1998",
  },

  {
    id: nanoid(),
    text: "hello! I'm a note 3!",
    date: "14/2/1998",
  },

  {
    id: nanoid(),
    text: "hello! I'm a note 4!",
    date: "14/2/1998",
  },
  ])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id)
    setNotes(newNotes)
  }

  const [searchText, setSearchText] = useState("")

  return (
    <div className="container">
      <SearchNote handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  )
}

export default App;