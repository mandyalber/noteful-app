import React from 'react';
import NotesContext from './NotesContext';
import './NoteSideBar.css';
import PropTypes from 'prop-types';

//this component renders the folder for the current note and a back button
export default function NoteSideBar({ folder = false, history, match }) {
    return (
        <NotesContext.Consumer>
            {(value) => {
                const { notes, folders } = value
                const { noteId } = match.params;
                const note = notes.find(note => note.id === noteId) || {}
                const folder = folders.find(folder => folder.id === note.folderId) || {}
                return (
                    <div className="note-sidebar">
                        <p className="selected-folder">{folder.name}</p>
                        <button className="back-button"
                            onClick={() => history.goBack()}>Go Back
                    </button>
                    </div>
                )
            }}
        </NotesContext.Consumer>
    )
}

NoteSideBar.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
  };