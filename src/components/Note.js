import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css'

//this component renders note title as link, modified date and delete note button
export default function Note(props) {
    const { name, id, modified } = props
    return (

        <div className="note">
            <h2 className='note-title'>
                <Link to={`/note/${id}`}>
                    {name}
                </Link>
            </h2>

            <div className='note-modified'>
                Modified on {' '}
                <span className='date'>
                    {modified}
                </span>

            </div>
        </div>
    )
    //current note
    //note title with link to note page
    //date modified      
    //delete button


    /* Implement the delete button on the note page, if the delete is successful, redirect to the / path.

    Implement the delete button for each note in the list in the main route and folder route. 
    
    To delete notes, make a DELETE request to the /notes/<note-id> endpoint.

    You can implement the DELETE request in the component that owns the delete button, and then use a callback context value to update the state in your top level component.
    
    After making a successful DELETE request, you can use a this.state.notes.filter method along with setState to remove a note from state and update context.To add the content type header in fetch requests you can pass in an "init" object with settings. Here's an example for a DELETE request:

    fetch(`http://localhost:1234/foo/${fooId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })

    */

}