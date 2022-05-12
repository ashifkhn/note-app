import Notes from "./Notes";
import AddNewNote from "./AddNewNote";
import "./style/noteslist.css"


const NotesList = ({ notes, handleAddNote }) => {
  console.log(notes)
  return <div className="note_list">
    {
      notes.map((note) =>
        <Notes key={note.id} text={note.text} date={note.date} />)
    }
    <AddNewNote handleAddNote={handleAddNote} />

  </div>;
};

export default NotesList;
