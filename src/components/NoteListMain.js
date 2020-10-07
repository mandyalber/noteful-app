import React from 'react';
import Note from './Note';
import NotesContext from './NotesContext';
import './NoteListMain.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//this component renders a list of notes and can be filtered based on selected folder
export default function NoteListMain({ match }) {
    return (
        <NotesContext.Consumer>
            {(value) => {
                const notes = value.notes
                const { folderId } = match.params
                const folderNotes = (!folderId) ? notes : notes.filter(note => note.folderId === folderId)

                if (notes.length) {
                    return (
                        <>
                            <ul className="notes-list">
                                {folderNotes.map((note, i) =>
                                    <li key={i}>
                                        <Note id={note.id}
                                            name={note.name}
                                            modified={note.modified}
                                        />
                                    </li>
                                )}
                            </ul>
                            <Link to="/add-note">
                                <button id="add-note" className="add-note">Add Note</button>
                            </Link>
                        </>
                    )
                }
            }}
        </NotesContext.Consumer>
    )
}

NoteListMain.propTypes = {
    match: PropTypes.object,
};