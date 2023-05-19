export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_ID = "UPDATE_USER_ID";





export const loginAPI = (id) => {
  return dispatch => {
    return new Promise((response, error) => {
      dispatch(userStatusUpdateAction(true));
      dispatch(userIdUpdateAction(id));
      localStorage.setItem('whatsapp_token', id);

      response('Login successful'); // Resolve with the desired response
      error('Login NoOoOoo'); // Resolve with the desired response
    });
  };
};





export const logoutAction = (id) => {
  return dispatch => {
    dispatch(userStatusUpdateAction(false));
    dispatch(userIdUpdateAction(null));
    localStorage.removeItem('whatsapp_token');
  };
};










export const userStatusUpdateAction = (val) => {
  return {
    type: UPDATE_USER,
    payload: val
  }
}

export const userIdUpdateAction = (val) => {
  return {
    type: UPDATE_USER_ID,
    payload: val
  }
};
