import React from 'react';
import './NoteMain.css'
import Note from './Note';

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

    //note
    //note content

    //add note button

}
NoteMain.defaultProps = {
    note: {
      content: '',
    }
  }