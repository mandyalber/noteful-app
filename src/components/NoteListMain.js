import React from 'react';
import Note from './Note';
import NotesContext from './NotesContext';
import './NoteListMain.css'

//this component renders a list of notes and can be filtered based on selected folder
export default function NoteListMain({ match }) {
    return (
        <NotesContext.Consumer>
            {(value) => {
                const notes = value.notes
                const { folderId } = match.params
                const folderNotes = (!folderId) ? notes : notes.filter(note => note.folderId === folderId)
                return (
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
                )
            }}
        </NotesContext.Consumer>
    )
    //add note button

}
/*Requirements
  Review each of the components that you have built so far for this project. Any component that receives props from its parent should be refactored to define PropType validation.
*/
