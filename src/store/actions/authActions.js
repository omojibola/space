import * as actions from './actionTypes';

export const SignUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res.user.uid);

    await firestore.collection('users').doc(res.user.uid).set({
      fullName: data.name,
      email: data.email,
    });
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.AUTH_FAIL, payload: error.message });
  }
  dispatch({ type: actions.AUTH_END });
};
