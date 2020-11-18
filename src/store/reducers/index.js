import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  profile: profileReducer,
});
