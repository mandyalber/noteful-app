import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css'
import NotesContext from './NotesContext';
import { format } from 'date-fns';

function deleteNoteRequest(noteId, callback, onDeleteNote) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(data => {
            onDeleteNote(noteId)
            callback(noteId)
        })
        .catch(error => {
            console.error(error)
        })
}

//this component renders note title as link, modified date and delete note button
export default function Note(props) {
    const { name, id, modified } = props
    return (
        <div className="note">
            <h2 className='note-title'>
                <Link to={`/note/${id}`}>
                    {name}
                </Link>
            </h2>
            <div className='note-modified'>
                Modified on {' '}
                <span className='date'>
                {format(new Date(modified), 'MM/dd/yyyy')}
                </span>
            </div>
            <NotesContext.Consumer>
                {(context) => (
                    <button
                        onClick={() => {
                            deleteNoteRequest(
                                props.id,
                                context.deleteNote,
                                props.onDeleteNote
                            )
                        }}
                    >Delete
                    </button>
                )}
            </NotesContext.Consumer>
        </div >
    )
}
Note.defaultProps = {
    onClickDelete: () => { },
  }
  /*Requirements
  Review each of the components that you have built so far for this project. Any component that receives props from its parent should be refactored to define PropType validation.
*/