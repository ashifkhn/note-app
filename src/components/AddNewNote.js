const AddNewNote = () => {
    return <div className="add_new_note note">
        <textarea placeholder="Type to add new Note...." cols="30" rows="10"></textarea>
        <div className="note_footer">
            <small>count</small>
            <button className="save-btn">Save</button>
        </div>
    </div>
}

export default AddNewNote;