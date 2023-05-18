import { createAsyncThunk } from '@reduxjs/toolkit';


export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_ID = "UPDATE_USER_ID";




// export const loginAPI = id => {
//   console.log('loginAPI', id);
//   return dispatch => {
//     dispatch({
//       type: UPDATE_USER,
//       payload: true
//     });
//     dispatch({
//       type: UPDATE_USER_ID,
//       payload: id
//     });
//     localStorage.setItem('whatsapp_token', id)
//   }
   
// }


export const loginAPI = createAsyncThunk('user/loginAPI', async (id, { dispatch }) => {
  console.log('loginAPI 5555555555555555555', id);
  dispatch(lessNumber(id));
  dispatch(addNumber(id));

  
  localStorage.setItem('whatsapp_token', id)
}); 



export const lessNumber = (id) => {
  console.log('lessNumber', id);
  return {
    type: UPDATE_USER,
    payload: true
  }
}
export const addNumber = (id) => {
  console.log('addNumber', id);
  return {
    type: UPDATE_USER_ID,
    payload: id
  }
};






// export const fetchAuctions = auctions => {
//   return dispatch => {
//     axios.get(GET_PRODUCTS,
//       {
//         params: {
//           product_type: "Auction"
//         }
//       }
//     )
//       .then(response => {
//         dispatch(fetchAuctionSuccess(response.data));
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   };
// };









