import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteListMain from './components/NoteListMain';
import NoteListSideBar from './components/NoteListSideBar';
import NoteMain from './components/NoteMain';
import NoteSideBar from './components/NoteSideBar';
import dummyStore from './dummy-store';
import './App.css'


class App extends React.Component {

  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    //will replace with API call
    this.setState(dummyStore)
  }

  renderSideBarRoute() {
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact path={path}
            key={path}
            render={routeProps => (
              <NoteListSideBar
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}

        {/*path=noteId* render =*/}
        <Route
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = notes.find(note => note.id === noteId)
            const folder = folders.find(folder => folder.id === note.folderId)
            return <NoteSideBar {...routeProps} folder={folder} />
          }}
        />
      </>
    )
  }

  renderMainRoute() {
    const { notes } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            path={path}
            key={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params;
              const folderNotes =
                (!folderId) ? notes : notes.filter(note => note.folderId === folderId)
              return <NoteListMain {...routeProps} notes={folderNotes} />
            }}
          />
        ))}

        <Route
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = notes.find(note => note.id === noteId)
            return <NoteMain {...routeProps} note={note} />
          }}
        />
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <nav className="noteful-nav">{this.renderSideBarRoute()}</nav>
        <header className="noteful-header">
          <h1><Link to='/'>Noteful</Link></h1>
        </header>
        <main className="noteful-main">{this.renderMainRoute()}</main>
      </div>
    );
  }
}

export default App;

/*There are 3 routes to build: the main route, the dynamic folder route, and a dynamic note route. We'll supply you with 3 wireframes for each of these pages and you'll then need to create the semantic (accessible) HTML for these as well as basic styling.

    Each route should have a header, main section, and a sidebar section

    Every route will have the same header section, the app's title should be a link to the main route


    The dynamic note route:
        Should be displayed when the path is /note/<with-a-note-id-here>
        The note-id will reference an id of one of the notes in state
        The main section should display the currently selected notes name, modified date and content
        The sidebar should display the folder of the currently selected note as well as a "back" button.
*/