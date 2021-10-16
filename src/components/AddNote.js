import React, { useState } from 'react'

const AddNote = ({handleAddNotes}) => {

    const [noteText, setNoteText] = useState("")
    const charLimit = 200

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0)
        setNoteText(event.target.value);
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNotes(noteText.trim())
            setNoteText('')
        }
    }

    return (
        <div className="note new">
            <textarea 
                cols="10" 
                rows="8"
                placeholder='type to add new note...'
                onChange={handleChange}
                value={noteText}>
            </textarea>
            <div className='note-footer'>
                <small>{charLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote