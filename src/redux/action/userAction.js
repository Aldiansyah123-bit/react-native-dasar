export const storeUser = item => dispatch => {
  dispatch({
    type: 'NAMAUSER',
    payload: item,
  });
};

export const storeAge = item => dispatch => {
  dispatch({
    type: 'AGE',
    payload: item,
  });
};

export const Profile = item => dispatch => {
  dispatch({
    type: 'PROFILE',
    payload: item,
  });
};
