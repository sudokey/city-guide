import { pick } from 'lodash';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { USER_SET_DATA, USER_UNSET_DATA, USER_PROP_NAMES } from '../utils/constants';

export const setData = data => ({
  type: USER_SET_DATA,
  data,
});

export const unsetData = () => ({
  type: USER_UNSET_DATA,
});

export const startAuthStateChangeListener = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(setData(pick(user, USER_PROP_NAMES)));
    } else {
      dispatch(unsetData());
    }
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

export const signOut = () => async (dispatch) => {
  try {
    // TODO: Show loader
    await firebase.auth().signOut();
    dispatch(unsetData());
  } catch (e) {
    // TODO: Show notification
  }
};
