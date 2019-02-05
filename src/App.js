import React from 'react';
import FolderList from './components/FolderList/FolderList';
import 'tachyons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  async getMovies() {
    try {
      const response = await fetch("https://swapi.co/api/films/?format=json");
      if (response.ok) {
        const jsonResponse = await response.json();
        this.setState({ movies: jsonResponse.results });
      } else {
        // TODO: Tratar falha do API call
      }

    } catch (error) {
      // TODO: Tratar falha do API call
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <h1>STAR WARS</h1>
        <h2>Filmes</h2>
        <FolderList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
