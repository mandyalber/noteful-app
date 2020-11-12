import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteListMain from './components/NoteListMain';
import NoteListSideBar from './components/NoteListSideBar';
import NoteDetails from './components/NoteDetails';
import NoteSideBar from './components/NoteSideBar';
import NotesContext from './components/NotesContext';
import './App.css'
import config from './config';
import AddFolder from './components/AddFolder';
import AddNote from './components/AddNote';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component {

  state = {
    notes: [],
    folders: []
  }

  deleteNote = noteId => {
    fetch(`${config.API_ENDPOINT}/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        this.componentDidMount()
        window.location.href = "/"
      })
      .catch(error => {
        console.error(error)
      })
    }

  addFolder = (folderName) => {
    this.setState({
      folders: [...this.state.folders, folderName],
    })
  }

  addNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/folders`),
      fetch(`${config.API_ENDPOINT}/api/notes`)
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
      .then(([folders, notes]) => this.setState({ folders, notes }))
      .catch(error => this.setState({ error }))
  }

  renderSideBarRoute() {
    return (
      <>
        <Route exact path='/' component={NoteListSideBar} />
        <Route path='/folder/:folderId' component={NoteListSideBar} />
        <Route path='/note/:noteId' component={NoteSideBar} />
        <Route path='/add-folder' component={NoteSideBar} />
        <Route path='/add-note' component={NoteSideBar} />
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
        <Route path='/add-note' component={AddNote} />
      </>
    )
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote
    }
    return (
      <div className="App">
        <NotesContext.Provider value={contextValue}>
          <ErrorBoundary>
            <nav className="noteful-nav">{this.renderSideBarRoute()}</nav>
            <header className="noteful-header">
              <h1><Link to='/'>Noteful</Link></h1>
            </header>
            <main className="noteful-main">{this.renderMainRoute()}</main>
          </ErrorBoundary>
        </NotesContext.Provider>
      </div>
    )
  }
}

export default App;
