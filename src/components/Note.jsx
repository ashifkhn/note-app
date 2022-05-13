import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "../style/notes.css";

export const Note = ({ id, text, date, handleDeleteNote }) => {
  //   console.log(date);
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note_footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete_icon"
          size="1.5em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};
