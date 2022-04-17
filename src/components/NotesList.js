import Notes from "./Notes";
import AddNewNote from "./AddNewNote";
import "./style/noteslist.css"


const NotesList = ({ notes }) => {
  console.log(notes)
  return <div className="note_list">
    {
      notes.map((note) =>
        <Notes key={note.id} text={note.text} date={note.date} />)
    }
    <AddNewNote />

  </div>;
};

export default NotesList;
