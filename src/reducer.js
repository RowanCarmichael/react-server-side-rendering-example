import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  users: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        users: [],
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
