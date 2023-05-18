export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";




export const lessNumber = (state) => {
  return {
    type: DECREMENT,
    payload: state
  }
}








export const addNumber = (state) => {
  return {
    type: INCREMENT,
    payload: state
  }
};



