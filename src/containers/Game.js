import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameCard } from '../components';
import '../styles/game.css'

class Game extends Component {
    render() {
        const renderDoggos = this.props.songgos.length ?
            this.props.doggos.map((d, idx) => <GameCard key={idx} doggo={d}/>)
            : <h1>No doggos here...</h1>

        return (
            <>
            { this.props.loading ? 
                "Loading..." 
                : <section id="doggos">{ renderDoggos }</section>
            }
            </>
        );
    }
}

const mSTP = state => ({
    doggos: state.allDoggos,
    loading: state.loading
})

export default connect(mSTP)(Game);