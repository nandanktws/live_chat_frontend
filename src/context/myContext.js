import React, { useReducer, createContext, useCallback } from 'react'

import * as types from "./myReducer";
import myReducer from "./myReducer";

import axios from 'axios';
// import { useAlert } from 'react-alert'
// import { API_URL } from '../const';

const initialState = {
  // user: false,
  // userID: null,

  user: true,
  userID: 'fi94jf7sjd84',
};

export const MyContext = createContext(initialState);
export const MyProvider = ({ children }) => {
  // const alert = useAlert()
  const [myState, dispatch] = useReducer(myReducer, initialState);



  const loginAPI = (id) => {
    dispatch({
      type: types.SET_USER_ACIVE,
      payload: true
    });
    dispatch({
      type: types.SET_USER_ID,
      payload: id
    });
  }





  // const checkToken = useCallback(async (id_order, token_access) => {
  //   axios.post(`${API_URL}order/public/check`, {
  //     "id_order": id_order,
  //     "token_access": token_access
  //   })
  //     .then((res) => {
  //       // console.log(res)
  //       dispatch({ type: types.ID_ORDER_RED, payload: id_order });
  //       dispatch({ type: types.TOKEN_ACCESS_RED, payload: token_access });

  //       dispatch({ type: types.LOADING, payload: false });
  //       dispatch({ type: types.TOKENISVALID, payload: true })
  //       return { success: true };
  //     })
  //     .catch((error) => {
  //       // console.log(error)
  //       alert.error('Invalid token error')
  //       dispatch({ type: types.LOADING, payload: false });
  //       dispatch({ type: types.TOKENISVALID, payload: false })
  //       return { success: false };
  //     });
  // }, []);





  // const fetchAllData = useCallback(async (id_order, token_access) => {
  //   dispatch({ type: types.INNERLOADING, payload: true });
  //   return axios.post(`${API_URL}chat/order/public/read`, {
  //     "id_order": id_order,
  //     "token_access": token_access
  //   })
  //     .then((res) => {
  //       dispatch({ type: types.INNERLOADING, payload: false });
  //       return res.data;
  //     })
  //     .catch((error) => {
  //       alert.error('Error while fetching data')
  //       dispatch({ type: types.INNERLOADING, payload: false });
  //       return error;
  //     });
  // }, []);




  // const getDepartmentApi = useCallback(async () => {
  //   dispatch({
  //     type: types.SET_TABLE_MINI_LOADER_DATA,
  //     payload: true,
  //   });
  //   return costRateDepartmentRequest(token)
  //     .then((res) => {
  //       dispatch({
  //         type: types.SET_CR_EXTERNAL_DEPARTMENT_DATA,
  //         payload: res.data,
  //       });
  //       dispatch({
  //         type: types.SET_TABLE_MINI_LOADER_DATA,
  //         payload: false,
  //       });
  //       return { success: true };
  //     })
  //     .catch((error) => {
  //       dispatch({
  //         type: types.SET_TABLE_MINI_LOADER_DATA,
  //         payload: false,
  //       });
  //       return error.response.data.error;
  //     });
  // });


  // const createDepartmentApi = useCallback(async (requestData) => {
  //   return addDepartmentRequest(requestData, token)
  //     .then((res) => {
  //       alert.success("Department Add Successfully");
  //       getDepartmentApi(initialState.currentPage, initialState.pageSize, initialState.sort, token)
  //       return { success: true };
  //     })
  //     .catch((error) => {
  //       var errors = error.response.data;
  //       Object.keys(errors).map((e) => {
  //         alert.error(`${e}: ${errors[e][0]}`)
  //       })
  //       return { success: false };
  //     });
  // });





  return (
    <MyContext.Provider
      value={{
        myState,
        loginAPI
      }}
    >
      {" "} {children} {" "}
    </MyContext.Provider>
  );
};
