import { Note } from "./Note";
import { AddNote } from "./AddNote";
import "../style/notes-list.css";
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes_list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
