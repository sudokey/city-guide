import { pick } from 'lodash';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AUTH_SET_DATA, USER_PROPS } from '../libs/constants';
import * as usersActions from './users';

export const setData = data => ({
  type: AUTH_SET_DATA,
  data,
});

export const startAuthStateChangeListener = () => (dispatch) => {
  dispatch(setData({
    loading: true,
  }));

  firebase.auth().onAuthStateChanged((user) => {
    let userUid;

    if (user) {
      const userData = pick(user, USER_PROPS);
      userUid = userData.uid;
      dispatch(usersActions.add(userData));
    } else {
      userUid = null;
    }

    dispatch(setData({
      userUid,
      loading: false,
    }));
  });
};

export const authWithGoogle = () => async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  } catch (e) {
    // TODO: Show notification
  }
};

export const authWithFacebook = () => async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  } catch (e) {
    // TODO: Show notification
  }
};

export const signOut = () => async () => {
  try {
    // TODO: Show loader
    await firebase.auth().signOut();
  } catch (e) {
    // TODO: Show notification
  }
};
