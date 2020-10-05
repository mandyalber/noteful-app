import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteListMain from './components/NoteListMain';
import NoteListSideBar from './components/NoteListSideBar';
import NoteDetails from './components/NoteDetails';
import NoteSideBar from './components/NoteSideBar';
import NotesContext from './components/NotesContext';
import './App.css'
import AddFolder from './components/AddFolder';


class App extends React.Component {


  state = {
    notes: [],
    folders: []
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    )
    this.setState({
      notes: newNotes
    })
  }
  addFolder = (folderName) => {
    

    this.setState({ folders: [...this.state.folders, folderName], })
  }

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/folders'),
      fetch('http://localhost:9090/notes')
    ])
      .then(([foldersResponse, notesResponse]) => {
        if (!foldersResponse.ok) {
          throw new Error(foldersResponse.status)
        }
        if (!notesResponse.ok) {
          throw new Error(notesResponse.status)
        }
        console.log(notesResponse, foldersResponse)
        return Promise.all([foldersResponse.json(), notesResponse.json()])
      })
      .then(([folders, notes]) => this.setState({ folders, notes }) || console.log(folders, notes))
      .catch(error => this.setState({ error }))
  }

  renderSideBarRoute() {
    return (
      <>
        <Route exact path='/' component={NoteListSideBar} />
        <Route path='/folder/:folderId' component={NoteListSideBar} />
        <Route path='/note/:noteId' component={NoteSideBar} />
        <Route path='/add-folder' component={NoteSideBar} />
      </>
    )
  }

  renderMainRoute() {
    return (
      <>
        <Route exact path='/' component={NoteListMain} />
        <Route exact path='/folder/:folderId' component={NoteListMain} />
        <Route path='/note/:noteId' component={NoteDetails} />
        <Route path='/add-folder' component={AddFolder} />
      </>
    )
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
    }
    return (
      <div className="App">
        <NotesContext.Provider value={contextValue}>
          <nav className="noteful-nav">{this.renderSideBarRoute()}</nav>
          <header className="noteful-header">
            <h1><Link to='/'>Noteful</Link></h1>
          </header>
          <main className="noteful-main">{this.renderMainRoute()}</main>
        </NotesContext.Provider>
      </div>
    );
  }
}

export default App;

/*Requirements
  Review each of the components that you have built so far for this project. Any component that receives props from its parent should be refactored to define PropType validation.
*/