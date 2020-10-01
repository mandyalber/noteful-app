import React from 'react';
import './NoteSideBar.css'

export default function NoteSideBar(props) {
    console.log(props)
    return (
        <div className="note-sidebar">
            {props.folder &&(<p className="selected-folder">{props.folder.name}</p>)}
            <button className="back-button"
                onClick={()=>props.history.goBack()}>Go Back
            </button>
        </div>
    )
}