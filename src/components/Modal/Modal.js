import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.container = document.createElement('div');
        document.body.appendChild(this.container);

        this.state = {
            characters: [],
            planets: [],
            species: [],
            starships: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentWillUnmount() {
        document.body.removeChild(this.container);
    }

    getNames(urls, stateName) {
        Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json()).then(jsonResponse => jsonResponse.name)
        )).then(names => {
            this.setState({ [stateName]: names })
        })
    }

    getData() {
        const { characters, planets, species, starships } = this.props.movie;

        this.getNames(characters, 'characters');
        this.getNames(planets, 'planets');
        this.getNames(species, 'species');
        this.getNames(starships, 'starships');
    }

    render() {
        const { title, release_date, director, opening_crawl, episode_id } = this.props.movie;
        const { characters, planets, species, starships } = this.state;
        const release_year = release_date.substring(0, 4);

        return ReactDOM.createPortal(
            <div className="container" onClick={this.props.toogleModal}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                    <div className="fl w-100 pa4 tj">
                        <h3 className="movie-title" >{title} <span className="f7">{release_year}</span></h3>
                        <img className="poster" src={require(`../../img/${episode_id}-min.jpg`)} alt="movie_poster" />
                        <p class="direcao">Dirigido por {director}</p>
                        <p>
                            Sinopse:
                    <br />
                            <i>{opening_crawl}</i>
                        </p>
                        <p>
                            Personagens:
                        <ul>
                                {characters.map(character => {
                                    return (
                                        <li>{character}</li>
                                    );
                                })}
                            </ul>
                        </p>
                        <p>
                            Planetas:
                        <ul>
                                {planets.map(planet => {
                                    return (
                                        <li>{planet}</li>
                                    );
                                })}
                            </ul>
                        </p>
                        <p>
                            Espécies:
                        <ul>
                                {species.map(specie => {
                                    return (
                                        <li>{specie}</li>
                                    );
                                })}
                            </ul>
                        </p>
                        <p>
                            Naves:
                        <ul>
                                {starships.map(starship => {
                                    return (
                                        <li>{starship}</li>
                                    );
                                })}
                            </ul>
                        </p>
                    </div>
                    <button className="voltar" onClick={this.props.toogleModal}>
                        Voltar
                </button>
                </div>
            </div>,
            this.container
        );
    }
}

export default Modal;