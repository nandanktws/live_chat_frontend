export const USER_DATA = "USER_DATA";
export const ALL_MESSAGE = "ALL_MESSAGE";
export const NEW_MESSAGE_TO_LOCAL = "NEW_MESSAGE_TO_LOCAL";
















export const userDataUpdateAction = (resData) => {
  return {
    type: USER_DATA,
    payload: resData
  };
};

export const allMessageUpdateAction = (resData) => {
  return {
    type: ALL_MESSAGE,
    payload: resData
  };
};

export const newMessageToLocalUpdateAction = (resData) => {
  return {
    type: NEW_MESSAGE_TO_LOCAL,
    payload: resData
  };
};





