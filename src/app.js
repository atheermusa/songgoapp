import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
    componentDidMount(){
        this.props.runFunc()
    }

    render() {
        return (
            <>
            <h1>This is our page</h1>
            <h3 id="refresh" onClick={this.props.runFunc}>! <FontAwesomeIcon icon={faBone} /></h3>
            <Game />
            </>
        )
    }
}

export default connect(null, { runFunc })(App);