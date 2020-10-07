import React, { useState } from 'react';
import NotesContext from './NotesContext';
import PropTypes from 'prop-types';

//renders form that adds new folder to folder array
export default function AddFolder({ history }) {


    function handleNewFolderSubmit(event, addFolder) {
        event.preventDefault()
        const name = event.target.name.value;

        fetch(`http://localhost:9090/folders/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name })
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
            addFolder(responseJson)
            history.push(`/`)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const [newFolder, setNewFolder] = useState({
        name: '',
        touched: false
    })

    const updateFolderName = (input) => {
        setNewFolder({ 
            ...newFolder,
            name: input.trim(),
            touched: true
        })
        
    };

    const validateFolder = () => {
        if (newFolder.name.length <= 3) {            
            return "Name must be at least 4 characters";
        }
    }

    return (
        <NotesContext.Consumer>
            {(context) => (
    
                <form onSubmit={(e) => handleNewFolderSubmit(e, context.addFolder)}>
                    <h2>Create a New Folder </h2>
                    <label htmlFor="new-folder-name">
                        Enter new folder name:{' '}   
                    </label>
                    <input
                        type="text"
                        id="new-folder-name"
                        name="name"
                        onChange={(e) => updateFolderName(e.target.value)}
                        required
                    />
                    <br/><p className="validate">{newFolder.touched && (validateFolder())}</p>
                    <button type="submit"disabled={validateFolder()}>
                        Submit
                    </button>
                </form>
            )}
        </NotesContext.Consumer>
    )

}
AddFolder.propTypes = {
    history: PropTypes.any
  }
