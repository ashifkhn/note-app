import { MdDelete } from 'react-icons/md'
import "./style/notes.css"
const Notes = () => {
    return <div className="note">
        <span>I am a note</span>
        <div className='note_footer'>
            <small>17/4/2023</small>
            <MdDelete size="1rem" />
        </div>
    </div >
}

export default Notes