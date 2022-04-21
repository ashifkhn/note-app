import { useState } from 'react';
import "./style/addnewnote.css"


const AddNewNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("")
    const handleChange = (event) => {
        // console.log(event.target.value)
        setNoteText(event.target.value)
    }
    const handleSaveNote = () => {
        handleAddNote(noteText)
    }


    return <div className="add_new_note note">
        <textarea placeholder="Type to add new Note...." cols="30" rows="10" onChange={handleChange} value={noteText}></textarea>
        <div className="note_footer">
            <small>200 rem</small>
            <button className="save_btn" onClick={handleSaveNote}>Save</button>
        </div>
    </div>
}

export default AddNewNote;