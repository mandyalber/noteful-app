import React from 'react';
import './NoteDetails.css'
import Note from './Note';
import NotesContext from './NotesContext';
import PropTypes from 'prop-types';

//this component renders the current note and that note's content
export default function NoteDetails({ match, history }) {   
    
    function handleDeleteNote (noteId) {
       history.push(`/`)
    }
    return (
        <NotesContext.Consumer>
            {(value) => {
                const notes = value.notes
                const { noteId } = match.params;
                const note = notes.find(note => note.id === noteId) || {}
                
                return (
                    <section className="note-main">
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                            onDeleteNote={handleDeleteNote}
                        />
                        <div className="note-content">
                            {note.content}
                        </div>
                    </section>
                )
            }}
        </NotesContext.Consumer>
    )
}

NoteDetails.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
};