import React from 'react';
import '../stylesheets/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { log_in } from '../actions';

import Welcome from './Welcome';

function App() {

        
    
        return (
            <div className='App'>
                <div className='App-Header-Container'>
                    <div className='App-Header'>
                        <div className='App-Title'>Blogsite</div>
                    </div>
                </div>  

                <div className='App-Foreign-Component'>
                    <Welcome />
                </div>


                <div className='App-Footer'>

                </div>
            </div>
        )
}

export default App;