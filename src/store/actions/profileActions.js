import * as actions from './actionTypes';

//fetch profile details
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
    dispatch({ type: actions.FETCH_PROFILE_SUCCESS, payload: userProfile });
  } catch (error) {
    dispatch({ type: actions.FETCH_PROFILE_FAIL, payload: error });
  }
  dispatch({ type: actions.FETCH_PROFILE_END });
};

//update profile details

export const updateProfile = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const uid = getState().firebase.auth.uid;
  dispatch({ type: actions.UPDATE_PROFILE_START });
  try {
    await firestore
      .collection('users')
      .doc(uid)
      .update({
        fullName: data.name,
        email: data.email,
        title: data.title,
        about: data.about,
        skills: data.skills,
        rate: data.rate,
        phoneNumber: data.phoneNumber || 'https://icotar.com/avatar/:hash',
        profileImage: data.profileImage,
        location: data.location,
      });

    dispatch({ type: actions.UPDATE_PROFILE_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.UPDATE_PROFILE_FAIL, payload: error.message });
  }
  dispatch({ type: actions.UPDATE_PROFILE_END });
};
