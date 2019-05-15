import { CATEGORIES_ADD } from '../libs/constants';

export default (
  state = {},
  action,
) => {
  switch (action.type) {
    case CATEGORIES_ADD:
      return {
        ...state,
        ...action.data.reduce((result, item) => ({
          ...result,
          [item.id]: {
            ...state[item.uid],
            ...item,
          },
        }), {}),
      };

    default:
      return state;
  }
};
