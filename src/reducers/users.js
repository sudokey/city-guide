import { USERS_ADD } from '../libs/constants';

export default (
  state = {},
  action,
) => {
  switch (action.type) {
    // TODO: Fix action.data as array
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
