import React from 'react';
import { NavLink } from 'react-router-dom'
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
    //add folder button
}