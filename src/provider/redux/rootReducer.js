import authManagement from "./reducer/authReducer";
import chatManagement from "./reducer/chatReducer";
import changeTheNumber from "./reducer/myReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer: changeTheNumber,
  authRootState: authManagement,
  chatRootState: chatManagement,
});

export default rootReducer;
