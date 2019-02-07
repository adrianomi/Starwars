import React from 'react';
import FolderList from './components/FolderList/FolderList';
import 'tachyons';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  async getMovies() {
    const response = await fetch("https://swapi.co/api/films/?format=json");
    if (response.ok) {
      const jsonResponse = await response.json();
      this.setState({ movies: jsonResponse.results });
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <h1 className="f2 tc">STAR WARS</h1>
        <h2 className="f3 tc">Filmes</h2>
        <FolderList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
