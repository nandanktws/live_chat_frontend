import { UPDATE_USER, UPDATE_USER_ID } from "../action/myAction";

const initialState = {
  user: false,
  userID: null,
};



const authManagement = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }

    case UPDATE_USER_ID:
      return {
        ...state,
        userID: action.payload
      }




    default: return state;
  }
}


export default authManagement;