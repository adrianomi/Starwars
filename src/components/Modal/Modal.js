import React from 'react';
import ReactDOM from 'react-dom';

let modalStyle = {
    position: 'fixed',
    top: '0px',
    backgroundColor: 'white',
    display: 'block',
    width: '100%',
    height: '100%',
    overflowY: 'auto'
}

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
        const { title, release_date, director, opening_crawl } = this.props.movie;
        const { characters, planets, species, starships } = this.state;
        const release_year = release_date.substring(0, 4);

        return ReactDOM.createPortal(
            <div style={modalStyle}>
                <div className="fl w-100 pa4 tj">
                    {/* <img src="" alt="" /> */}
                    <h3>{title} <span className="f7">{release_year}</span></h3>
                    <p>Dirigido por {director}</p>
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
            </div>,
            this.container
        );
    }
}

export default Modal;