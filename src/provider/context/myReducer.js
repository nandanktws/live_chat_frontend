export const SET_USER_ACIVE = 'SET_USER_ACIVE';
export const SET_USER_ID = 'SET_USER_ID';



// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {

    case SET_USER_ACIVE:
      return {
        ...state,
        user: action.payload
      };
    case SET_USER_ID:
      return {
        ...state,
        userID: action.payload
      };



  }
};
