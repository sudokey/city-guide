import { USERS_ADD } from '../libs/constants';

export const add = data => ({
  type: USERS_ADD,
  data,
});
