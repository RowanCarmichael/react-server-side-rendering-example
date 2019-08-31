import API from './services/api';

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersError = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersBegin());
    return API.fetchUsers()
      .then((users) => {
        dispatch(fetchUsersSuccess(users));
        return users;
      })
      .catch(error => dispatch(fetchUsersError(error)));
  };
}
