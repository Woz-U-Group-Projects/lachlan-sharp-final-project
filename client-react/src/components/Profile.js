import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../stylesheets/Profile.css';

class Profile extends Component {

    log_out = () => {
        this.props.dispatch({
            type: 'LOG_OUT'
        })
    }

    render() {
        return (
            <div className="Profile">
                <div className="Profile-Box">
                    <div className="Profile-Header">
                        <div className='Profile-Header-Name'>
                            {/* {this.props.user.firstName} {this.props.user.lastName} */}filler
                        </div>
                        <div className='Profile-Header-Forum-Link'>
                            Forum
                        </div>
                        <div className='Profile-Header-Signout' onClick={this.log_out}>
                            Sign Out
                        </div>
                    </div>
                    <div className="Profile-Body">
                        test
                    </div>

                </div>
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