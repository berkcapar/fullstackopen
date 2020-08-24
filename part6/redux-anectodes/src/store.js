import {createStore,combineReducers} from 'redux'
import anecdoteReducer, { initializeAnectodes } from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import anecdoteService from './services/anecdotes'

import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notice: notificationReducer,
  });

const store = createStore(reducer, composeWithDevTools())

anecdoteService.getAll().then( anecdotes =>
    store.dispatch(initializeAnectodes(anecdotes))
    )

export default store