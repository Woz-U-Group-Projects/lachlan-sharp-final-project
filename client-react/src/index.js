import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

// Install Redux devtools in Chrome to use this extension in the developer console
const redux_devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, {}, redux_devtools);



render(
<Provider store={store}>
    <App />
</Provider>
,
    document.getElementById('root'))