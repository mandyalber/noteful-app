import React from 'react';
import './NoteSideBar.css'

export default function NoteSideBar({folder = false, history}) {
    return (
        <div className="note-sidebar">
            {folder &&(<p className="selected-folder">{folder.name}</p>)}
            <button className="back-button"
                onClick={()=>history.goBack()}>Go Back
            </button>
        </div>
    )
}