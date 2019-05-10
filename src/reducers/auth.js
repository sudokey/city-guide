import { AUTH_SET_DATA } from '../utils/constants';

export default (
  state = {
    loading: true,
    userUid: null,
  },
  action,
) => {
  switch (action.type) {
    case AUTH_SET_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};
