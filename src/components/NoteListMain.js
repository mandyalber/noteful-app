import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';
import './NoteListMain.css'



export default function NoteListMain(props) {
    return (
        <ul className="notes-list">
            {props.notes.map((note, i) =>
                <li key={i}><Note id={note.id}
                    name={note.name}
                    modified={note.modified} /></li>
            )}
        </ul>
    )


    //list of all notes

    //add note button

}