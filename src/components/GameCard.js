import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLikeDoggo, deleteDoggo } from '../actions/doggoActions';
import { LikeButton, DeleteButton } from '../components';

class GameCard extends Component {
    handleToggleLike = id => {
        this.props.toggleLikeDoggo(id);
    }

    handleDelete = id => {
        this.props.deleteDoggo(id)
    }

    render() {
        const { id, img, liked } = this.props.doggo
        
        return (
            <div className="card">
                <img src={img} />
                <LikeButton liked={liked} handleClick={() => this.handleToggleLike(id)}/>
                <DeleteButton handleClick={() => this.handleDelete(id)}/>
            </div>

        );
    }
}

export default connect(null, { toggleLikeDoggo, deleteDoggo })(GameCard);