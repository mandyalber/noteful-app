import React from 'react';
import NotesContext from './NotesContext';
import './NoteSideBar.css';

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
/*Requirements
  Review each of the components that you have built so far for this project. Any component that receives props from its parent should be refactored to define PropType validation.
*/