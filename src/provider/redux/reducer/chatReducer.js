
const initialState = {
  userData: null,
  allMessage: null,
  newMessageToLocal: null,

};





const chatManagement = (state = initialState, action) => {
  // console.log(action,"<----------->")
  switch (action.type) {
    case "USER_DATA": return {
      ...state,
      userData: action.payload
    };
    case "ALL_MESSAGE": return {
      ...state,
      allMessage: action.payload
    };
    case "NEW_MESSAGE_TO_LOCAL": return {
      ...state,
      newMessageToLocal: action.payload
    };
    default: return state;
  }
};





export default chatManagement;