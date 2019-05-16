import { CATEGORIES_ADD } from '../libs/constants';
import Api from '../libs/api';

export const add = data => ({
  type: CATEGORIES_ADD,
  data,
});

export const startChangeListener = () => async dispatch => (
  Api.addCategoriesListner((categories) => {
    dispatch(add(categories));
  }, (err) => {
    // TODO: Add notification
    console.error(err);
  })
);

export const create = ({
  name,
  iconUrl,
}) => async () => {
  try {
    const categoryId = await Api.createCategory({
      name,
      iconUrl,
    });
    return categoryId;
  } catch (err) {
    throw err;
  }
};
