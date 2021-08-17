import { FETCH_USERS_LIST, FETCH_PLAYLISTS } from "../constants/action-types";

export const userListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS_LIST:
      return action.payload;
    default:
      return state;
  }
}

export const userPlaylistsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      return action.payload;
    default:
      return state;
  }
}
