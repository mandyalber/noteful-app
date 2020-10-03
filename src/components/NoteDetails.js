import React from 'react';
import './NoteDetails.css'
import Note from './Note';

// export default function NoteMain( {note = {content = ''}}) {
export default function NoteMain(props) {

    return (
        <section className="note-main">
            <Note
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />
            <div className="note-content">
                {props.note.content}
            </div>
        </section>

    )

  


    //add note button

}
NoteMain.defaultProps = {
    note: {
      content: '',
    }
  }