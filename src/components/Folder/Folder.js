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
        const { title, release_date, episode_id } = this.props.movie;
        const release_year = release_date.substring(0, 4);

        return (
            <div className="fl w-100 w-50-m w-33-l pa4 tj dim pointer">
                <h3 className="tc">{title} <span className="f7">{release_year}</span></h3>
                <div onClick={this.toogleModal}>
                    <img src={require(`../../img/${episode_id}-min.jpg`)} alt="movie_poster" style={{ borderRadius: '5px' }} />
                    <p style={{textAlign: 'center'}}>+ informações</p>
                </div>
                {this.state.showModal && <Modal movie={this.props.movie} toogleModal={this.toogleModal} />}
            </div>
        );
    }
}

export default Folder;