import React from 'react';
import Modal from '../Modal/Modal';

class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.toogleModal = this.toogleModal.bind(this);
        this.state = {
            showModal: false,
        }
    }

    toogleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        const { title, release_date, director, opening_crawl } = this.props.movie;
        const release_year = release_date.substring(0, 4);

        let brief_opening_crawl;
        if (opening_crawl.length > 170) {
            brief_opening_crawl = opening_crawl.substring(0, 170) + " ...";
        } else {
            brief_opening_crawl = opening_crawl;
        }

        return (
            <div onClick={this.toogleModal} className="fl w-100 w-50-m w-33-l pa4 tj dim pointer">
                {/* <img src="" alt="" /> */}
                <h3>{title} <span className="f7">{release_year}</span></h3>
                <p>Dirigido por {director}</p>
                <p>
                    Sinopse:
                    <br />
                    <i>{brief_opening_crawl}</i>
                </p>
                {this.state.showModal && <Modal movie={this.props.movie} />}
            </div>
        );
    }
}

export default Folder;