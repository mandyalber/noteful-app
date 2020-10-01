import React from 'react';
import { Link } from 'react-router-dom';


import './Note.css'

export default function Note(props) {
    return (
        <div className="note">
            <h2 className='note-title'>
                <Link to={`/note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>

            <div className='note-modified'>
                Modified on {' '}
                <span className='date'>
                {props.modified}
                </span>

            </div>
        </div>
    )
    //current note
    //note title with link to note page
    //date modified      
    //delete button

}