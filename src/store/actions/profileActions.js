import * as actions from './actionTypes';

export const fetchProfile = () => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const uid = getState().firebase.auth.uid;
  dispatch({ type: actions.FETCH_PROFILE_START });
  try {
    const res = await firestore.collection('users').doc(uid).get();
    const userProfile = res.data();
    console.log(userProfile);
    dispatch({ type: actions.FETCH_PROFILE_SUCCESS, payload: userProfile });
  } catch (error) {
    dispatch({ type: actions.FETCH_PROFILE_FAIL, payload: error });
  }
  dispatch({ type: actions.FETCH_PROFILE_END });
};
