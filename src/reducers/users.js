import { USERS_ADD } from '../libs/constants';

export default (
  state = {},
  action,
) => {
  switch (action.type) {
    case USERS_ADD:
      return {
        ...state,
        [action.data.uid]: {
          ...state[action.data.uid],
          ...action.data,
        },
      };

    default:
      return state;
  }
};
