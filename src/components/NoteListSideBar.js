import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './NoteListSideBar.css'

export default function NoteListSideBar(props) {
    return (
        <ul className="folder-list">
            {props.folders.map((folder) => (
                <NavLink to={`/folder/${folder.id}`} key={folder.id}>
                    <li>{folder.name}</li>
                </NavLink>
                
            ))}
        </ul>
    )
    //list of all folders
    //use a ul and map function for NavLink li's

    //add folder button
}