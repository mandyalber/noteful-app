import React from 'react';
import './NoteDetails.css'
import Note from './Note';
import NotesContext from './NotesContext';
import PropTypes from 'prop-types';

//this component renders the current note and that note's content
export default function NoteDetails({ match }) {   

    return (
        <NotesContext.Consumer>
            {(context) => {
                const notes = context.notes
                const { noteId } = match.params;
                const note = notes.find(note => note.id === parseInt(noteId)) || {}                
                return (
                    <section className="note-main">
                        <Note
                            id={note.id}
                            name={note.name}
                            modified={note.modified}                            
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
    match: PropTypes.object,
}