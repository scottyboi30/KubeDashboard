import * as firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAIL = 'SIGNUP_USER_FAIL';
export const SIGNUP_USER = 'SIGNUP_USER';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const signupUser = (email, password) => {
  return dispatch => {
    dispatch({type: SIGNUP_USER});
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => signupUserSuccess(dispatch, user))
      .catch(error => {
        signupUserFail(dispatch, error);
      });
  };
};

export const signupUserSuccess = (dispatch, user) => {
  dispatch({type: SIGNUP_USER_SUCCESS, payload: user});
  Actions.main();
};

export const signupUserFail = (dispatch, error) => {
  dispatch({type: SIGNUP_USER_FAIL, error: error.message});
};
