import React, { Component } from 'react'
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        return (
            <div>
                Test
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        isLogged: state.isLogged
    }
}

export default connect(mapStateToProps)(Profile);