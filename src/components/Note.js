import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';
import moment from 'moment';
import NotesContext from './NotesContext';
import PropTypes from 'prop-types';

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
                    {moment(modified).format("MMM Do YYYY")}
                </span>
            </div>
            <NotesContext.Consumer>
                {(context) => (
                    <button onClick={() => { context.deleteNote(props.id)}}>Delete</button>
                )}
            </NotesContext.Consumer>
        </div >
    )
}

Note.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    modified: PropTypes.string,
}