import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotesContext from './NotesContext';
import './NoteListSideBar.css';

//this component renders the list of available folders as nav bar
export default function NoteListSideBar(props) {
    return (
        <NotesContext.Consumer>
            {(value) => {
                return (
                    <div className="sidebar">
                        <ul className="folder-list">
                            {value.folders.map((folder) => (
                                <NavLink to={`/folder/${folder.id}`} key={folder.id}>
                                    <li>{folder.name}</li>
                                </NavLink>
                            ))}
                        </ul>
                        <Link to='/add-folder'>
                            <button >Add New Folder</button>
                        </Link>
                    </div>
                )
            }}

        </NotesContext.Consumer>
    )
    //add folder button
}
/*Requirements
  Review each of the components that you have built so far for this project. Any component that receives props from its parent should be refactored to define PropType validation.
*/