import axios from 'axios';

import { 
  FETCH_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  FETCH_USERS_LIST,
  FETCH_PLAYLISTS
} from "../constants/action-types";

export const fetchCurrentUser = () => async dispatch => {
  let res;
  try {
    res = await axios.get('/api/user/current_user', { withCredentials: true });
  } catch (err) {
    return console.log(err);
  }
  dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
};

export const logoutCurrentUser = () => async dispatch => {
  try {
    await axios.get('/api/user/auth/logout', { withCredentials: true });
  } catch (err) {
    return console.log(err);
  }
  dispatch({ type: LOGOUT_CURRENT_USER, payload: false });
}

export const fetchUsersList = () => async dispatch => {
  let res;
  try {
    res = await axios.get('/api/user', { withCredentials: true });
  } catch (err) {
    return console.log(err);
  }
  dispatch({ type: FETCH_USERS_LIST, payload: res.data.users });
};

export const fetchUserPlaylists = (userId) => async dispatch => {
  let res;
  try {
    res = await axios.get(`http://localhost:5000/api/playlists/user/${userId}`, { withCredentials: true });
  } catch(err) {
    return console.log(err);
  }
  dispatch({ type: FETCH_PLAYLISTS, payload: res.data.playlists });
}
