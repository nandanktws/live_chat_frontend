import { DECREMENT, INCREMENT } from "../action/myAction";

const initialState = {
  value: 4
};



const changeTheNubmer = (state = initialState, action) => {
  switch (action.type) {

    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }




    default: return state;
  }
}


export default changeTheNubmer;