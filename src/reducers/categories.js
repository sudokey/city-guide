import { CATEGORIES_ADD, CATEGORIES_REMOVE } from '../libs/constants';

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
            ...state[item.id],
            ...item,
          },
        }), {}),
      };

    case CATEGORIES_REMOVE:
      return Object.values(state).reduce((result, item) => ({
        ...result,
        ...(action.data.includes(item.id) ? null : {
          [item.id]: item,
        }),
      }), {});

    default:
      return state;
  }
};
