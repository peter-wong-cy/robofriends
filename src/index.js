// ___ Import libraries
// It is a React view library.
import React from 'react';
// It is for controlling web browser DOM.  Other library like reactNative for mobile app.
import ReactDOM from 'react-dom';

// ___ Import Redux libraries
//Provider method of react-redux provide a store for the app to use.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchRobots, requestRobots } from './reducers';

// ___ Import CSS
import './index.css';
// Tachyons has lots of ccs classes.
import 'tachyons';

// ___ Import our own created components
// If the path got no extension, then it assumes it is .js file.
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';


const logger = createLogger();

const rootReducer = combineReducers( {searchRobots, requestRobots} )
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// User the Redux <Provider> method to pass thru the store to all levels from the App.
// Under public/index.html file, it got the element 'root'.
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
