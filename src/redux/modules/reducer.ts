import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import auth from './auth';

const reducer = (history: History<unknown>) =>
  combineReducers({ auth, router: connectRouter(history) });

export default reducer;
