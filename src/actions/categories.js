import { CATEGORIES_ADD } from '../libs/constants';
import Api from '../libs/api';

export const add = data => ({
  type: CATEGORIES_ADD,
  data,
});

// TODO: Remove list action, add change listener
export const list = () => async (dispatch) => {
  try {
    const categories = await Api.getCategories();
    dispatch(add(categories));
    return categories;
  } catch (err) {
    throw err;
  }
};

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
