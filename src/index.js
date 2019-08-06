import React from 'react';
import ReactDOM from 'react-dom';

import {createStore,applyMiddleware,combineReducers} from 'redux';     /*combineReducer is used to combine 
																		two or more reducer into one root reducer*/
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './container/App';
import {searchRobots,requestRobots} from './reducer';                       
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const logger=createLogger();

const rootReducer=combineReducers({requestRobots,searchRobots})

const store = 
	createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))			//middleware logger console.log all the actions 

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
