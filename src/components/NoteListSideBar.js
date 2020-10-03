import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from './NotesContext';
import './NoteListSideBar.css';

//this component renders the list of available folders as nav bar
export default function NoteListSideBar(props) {
    return (
        <NotesContext.Consumer>
            {(value) => {
                return (
                    <ul className="folder-list">
                        {value.folders.map((folder) => (
                            <NavLink to={`/folder/${folder.id}`} key={folder.id}>
                                <li>{folder.name}</li>
                            </NavLink>
                        ))}
                    </ul>
                )
            }}

        </NotesContext.Consumer>
    )
    //add folder button
}