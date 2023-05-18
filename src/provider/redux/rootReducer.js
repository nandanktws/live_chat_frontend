import authManagement from "./reducer/authReducer";
import changeTheNubmer from "./reducer/myReducer";

import { combineReducers } from "redux";


const rootReducer = combineReducers({
  counterReducer: changeTheNubmer,
  authReducer: authManagement,
})








export default rootReducer;