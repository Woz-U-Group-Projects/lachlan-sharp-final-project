import React from 'react';
import '../stylesheets/App.css';
import Welcome from './Welcome';
import { connect } from 'react-redux';
import Profile from './Profile';

class App extends React.Component {

        render() {
        return (
            <div className='App'>
                <div className='App-Header-Container'>
                    <div className='App-Header'>
                        <div className='App-Title'>Blogsite</div>
                    </div>
                </div> 
                
                { (this.props.isLogged === false) 
                            ?
                <div className='App-Foreign-Component'>
                    <Welcome uri='http://localhost:3001/users' />
                </div>
                            :
                <div className='App-Profile-Component'>
                    <Profile />
                </div>

                }

                <div className='App-Footer'>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.isLogged,
        user: state.user
    }
}

export default connect(mapStateToProps)(App);