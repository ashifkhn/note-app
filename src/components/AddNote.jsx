import React, { useState } from "react";
import "../style/notes.css";

export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const limit = 250;
  const handleChange = (event) => {
    if (limit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleNoteSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="type...."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note_footer">
        <small>{limit - noteText.length} Remaining</small>
        <button className="save" onClick={handleNoteSave}>
          Save
        </button>
      </div>
    </div>
  );
};
