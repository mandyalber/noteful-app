import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotesContext from './NotesContext';
import './NoteListSideBar.css';

//this component renders the list of available folders as nav bar
export default function NoteListSideBar(props) {
    return (
        <NotesContext.Consumer>
            {(context) => {
                if (context.folders.length) {
                    return (
                        <div className="sidebar">
                            <ul className="folder-list">
                                {context.folders.map((folder) => (
                                    <li key={folder.id}>
                                        <NavLink to={`/folder/${folder.id}`} >
                                        <div className="folder">
                                            {folder.name}
                                            </div>
                                        </NavLink>
                                        
                                    </li>
                                ))}
                            </ul>
                            <Link to='/add-folder'>
                                <button >Add New Folder</button>
                            </Link>
                        </div>
                    )
                }
            }}
        </NotesContext.Consumer>
    )
}

NoteListSideBar.defaultProps = {
    folders: []
}