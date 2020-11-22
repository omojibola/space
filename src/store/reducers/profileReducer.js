import * as actions from '../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  data: {},
  update: {
    error: null,
    loading: false,
    data: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_PROFILE_START:
      return {
        ...state,
        loading: true,
      };

    case actions.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: { ...payload },
      };

    case actions.FETCH_PROFILE_FAIL:
      return {
        ...state,
        error: true,
        data: payload,
      };

    case actions.FETCH_PROFILE_END:
      return {
        ...state,
        loading: false,
      };

    case actions.UPDATE_PROFILE_START:
      return {
        ...state,
        update: { loading: true },
      };
    case actions.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        update: {
          loading: false,
          error: false,
          data: { payload },
        },
      };
    case actions.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        update: {
          loading: false,
          error: true,
          data: payload,
        },
      };
    default:
      return state;
  }
};
