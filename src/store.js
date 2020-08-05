import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import doggoReducer from './reducers/doggoReducer';

const store = createStore(songgoReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;