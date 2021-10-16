import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes, handleAddNotes, handleDeleteNote}) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date} 
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNotes={handleAddNotes}/>
        </div>
        
    )

}

export default NotesList