import React from 'react';
import './AddFolder.css'
import NotesContext from './NotesContext';




export default function AddFolder({ history }) {



    function handleNewFolderSubmit(event, addFolder) {
        event.preventDefault()
        const name = event.target.name.value;
        console.log(event, name)
        //api POST call
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



    return (
        <NotesContext.Consumer>
            {(context) => (
                <form onSubmit={(e) => handleNewFolderSubmit(e, context.addFolder)}>
                    <label htmlFor="new-folder-name">Enter new folder name: </label>
                    <input type="text" id="new-folder-name" name="name" required></input>
                    <button type="submit">Submit</button>
                </form>
            )}
        </NotesContext.Consumer>
    )
        
}


/*Create a new component AddFolder that implements a form to capture the name of a new folder from the user. This form should submit the name of the new folder to the POST /folders endpoint on the server. Ensure that any errors are properly handled. Add a button to the navigation to invoke the new form.*/