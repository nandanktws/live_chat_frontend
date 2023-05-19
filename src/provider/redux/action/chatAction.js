


import React from 'react'
import io from 'socket.io-client'
let socket




const chatAction = () => {
  socket = new io('http://localhost:3000', { reconnectionDelayMax: 10000, });
  socketInitializer()

  const socketInitializer = async () => {
    socket.on('userInfo', (e) => {
      console.log('rredux', 'userInfo e', e);
    });
    socket.on('userChatsMessages', (e) => {
      console.log('rredux', 'userChatsMessages', e);
    });
    socket.on('newMessage', (e) => {
      console.log('rredux', 'newMessage recived', e);
    });
    { console.log('rredux', 'userInfo state', userData) }
  }

  return (
    <div>chatAction</div>
  )
}

chatAction()























































// export const UPDATE_USER = "UPDATE_USER";
// export const UPDATE_USER_ID = "UPDATE_USER_ID";







// export const loginAPI = (id) => {
//   return dispatch => {
//     return new Promise((response, error) => {
//       dispatch(userStatusUpdateAction(true));
//       dispatch(userIdUpdateAction(id));
//       localStorage.setItem('whatsapp_token', id);

//       response('Login successful');
//       error('Login NoOoOoo');
//     });
//   };
// };





// export const logoutAction = (id) => {
//   return dispatch => {
//     dispatch(userStatusUpdateAction(false));
//     dispatch(userIdUpdateAction(null));
//     localStorage.removeItem('whatsapp_token');
//   };
// };










// export const userStatusUpdateAction = (val) => {
//   return {
//     type: UPDATE_USER,
//     payload: val
//   }
// }

// export const userIdUpdateAction = (val) => {
//   return {
//     type: UPDATE_USER_ID,
//     payload: val
//   }
// };
