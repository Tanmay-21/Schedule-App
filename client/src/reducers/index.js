import { combineReducers } from 'redux';
import { authReducer } from './authReducers';
import { userListReducer, userPlaylistsReducer } from './userReducers';

export default combineReducers({
  auth: authReducer,
  users: userListReducer,
  playlists: userPlaylistsReducer
});