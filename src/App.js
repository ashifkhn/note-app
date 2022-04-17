import "./App.css";
import NotesList from "./components/NotesList";
import { useState } from "react"
// import { nonoid } from "nanoid"

function App() {
  const [notes, setNotes] = useState([{
    id: 1,
    text: "This a note",
    date: "15/4/2022"
  },
  {
    id: 2,
    text: "This a note",
    date: "15/4/2022"
  },
  {
    id: 3,
    text: "This a note",
    date: "15/4/2022"
  },
  {
    id: 4,
    text: "This a note",
    date: "15/4/2022"
  },
  ])
  return (
    <div className="main_container">
      <h1>Note-App</h1>
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
