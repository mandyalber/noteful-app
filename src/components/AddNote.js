import React, { useState } from "react";
import NotesContext from "./NotesContext";
import PropTypes from "prop-types";


export default function AddNote(props) {

    function handleNewNoteSubmit(e, addNote) {
        e.preventDefault();
        const note = {
            name: e.target.name.value,
            content: e.target.content.value,
            folderId: e.target.folderId.value,
            modified: new Date(),
        }       

        fetch(`${config.API_ENDPOINT}/api/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => {
                    throw error
                })
            }
            return response.json()
        })
        .then(responseJson => {
            addNote(responseJson)
            props.history.push("/")
        })
        .catch((error) => console.log(error))
    }

    const [newNote, setNewNote] = useState({
        name: '',
        content: '',
        folderId: '', 
        touched: false
    })

    const updateField = e => {
        setNewNote({
            ...newNote,
            [e.target.name]: e.target.value,
            touched: true
        })
    }

    const validateName = () => {
        if (newNote.name.length <= 3) {            
            return "Name must be at least 4 characters";
        }
    }

    const validateContent = () => {
        if (newNote.content.length <= 10) {
            return "Content must be at least 10 characters";
        }
    }

    return (
        <NotesContext.Consumer>
            {(context) => {
                return (
                    <div id="container">
                        <form className="add-note" onSubmit={(e) => handleNewNoteSubmit(e, context.addNote)}>
                            <h2>Create a New Note </h2>
                            <label htmlFor="name">Title: </label><br/>                            
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="name"
                                onChange={(e) => updateField(e)}
                            />
                            <br/>{newNote.touched && (<p className="validate">{validateName()}</p>)}
                            <label htmlFor="content">Content: </label><br/>          
                            <input
                                id="content"
                                name="content"
                                type="textarea"
                                placeholder="content"
                                onChange={(e) => updateField(e)}
                            />
                            <br/>{newNote.touched && (<p className="validate">{validateContent()}</p>)}
                            <label htmlFor="folderId">Choose a folder for your note: </label><br/>
                            <select
                                id="folderId"
                                name="folderId"
                                onChange={(e) => updateField(e)}
                            >
                                {context.folders.map((folder) => (
                                    <option key={folder.id} name={folder.id} value={folder.id}>
                                        {folder.name}
                                    </option>))
                                }
                            </select>
                            <br/>
                            <button disabled={validateName() || validateContent()}>
                                Submit
                        </button>
                        </form>
                    </div>
                )
            }}
        </NotesContext.Consumer>
    )
}

AddNote.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
}

AddNote.defaultProps = {
    name: "",
    content: "",
    folderId: "",
}
