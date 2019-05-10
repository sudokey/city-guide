import { USERS_ADD } from '../utils/constants';

export const add = data => ({
  type: USERS_ADD,
  data,
});
