import React from 'react';
import FolderList from './components/FolderList/FolderList';
import 'tachyons';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.orderById = this.orderById.bind(this);
    this.orderByDate = this.orderByDate.bind(this);
    this.order = this.order.bind(this);

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

  order() {
    const ordem = document.querySelector('#ordem');
    if (ordem.value === 'id') {
      this.orderById();
    } else if (ordem.value === 'data') {
      this.orderByDate();
    }
    ordem.value = "none"
  }

  orderById() {
    this.setState((state) => {
      const orderedMovies = state.movies.sort((a, b) => a['episode_id'] - b['episode_id']);
      return { movies: orderedMovies };
    })
  }

  orderByDate() {
    this.setState((state) => {
      const orderedMovies = state.movies.sort((a, b) => {
        return Date.parse(a['release_date']) - Date.parse(b['release_date'])
      });
      return { movies: orderedMovies };
    })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <h1 className="f2 tc">STAR WARS</h1>
        <h2 className="f3 tc">Filmes</h2>
        <select id="ordem" onChange={this.order}>
          <option value='none'>Ordenar por</option>
          <option value='id'>Cronologia da História</option>
          <option value='data'>Data de Lançamento</option>
        </select>
        <FolderList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
