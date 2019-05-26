import {
  CATEGORIES_ADD,
  CATEGORIES_REMOVE,
  FIREBASE_EVENT_ADDED,
  FIREBASE_EVENT_MODIFIED,
  FIREBASE_EVENT_REMOVED,
} from '../libs/constants';
import Api from '../libs/api';

export const addList = data => ({
  type: CATEGORIES_ADD,
  data,
});

export const removeList = data => ({
  type: CATEGORIES_REMOVE,
  data,
});

export const startChangeListener = () => async dispatch => (
  Api.addCategoriesListner((categories) => {
    const addedCategories = categories
      .filter(changes => [FIREBASE_EVENT_ADDED, FIREBASE_EVENT_MODIFIED].includes(changes.type))
      .map(changes => changes.data);
    const removedCategories = categories
      .filter(c => c.type === FIREBASE_EVENT_REMOVED)
      .map(changes => changes.data.id);

    // TODO: Batch dispatch
    dispatch(addList(addedCategories));
    dispatch(removeList(removedCategories));
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

export const update = ({
  id,
  name,
  iconUrl,
}) => async () => {
  try {
    await Api.updateCategory({
      id,
      name,
      iconUrl,
    });
  } catch (err) {
    throw err;
  }
};

export const remove = ({
  id,
}) => async () => {
  try {
    await Api.removeCategory({ id });
    return id;
  } catch (err) {
    throw err;
  }
};
