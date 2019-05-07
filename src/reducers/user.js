import { USER_SET_DATA, USER_UNSET_DATA } from '../utils/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_SET_DATA:
      return {
        ...state,
        ...action.data,
      };

    case USER_UNSET_DATA:
      return {};

    default:
      return state;
  }
};
