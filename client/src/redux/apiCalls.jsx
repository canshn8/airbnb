import { 
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    logout
} from "./userRedux";
import {placePostStart,placePostSuccess,placePostFailure, getPlaceStart, getPlaceSuccess, getPlaceFailure} from "./placeRedux";
import {publicRequest, userRequest} from "../requestMethods";
import axios from "axios";


export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try{
        const res = await axios.post("http://localhost:5000/api/auth/register", user);
        dispatch(registerSuccess(res.data));
    }catch (err) {
        dispatch(registerFailure());
    }
};


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("http://localhost:5000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch (err) {
        dispatch(loginFailure());
    }
};

export const addPlace = async (place, dispatch) => {
    dispatch(placePostStart());
    try {
      const res = await axios.post(`http://localhost:5000/api/places`,place);
      dispatch(placePostSuccess(res.data));
    } catch (err) {
      dispatch(placePostFailure());
    }
  };


  export const getPlaces = async (dispatch) => {
    dispatch(getPlaceStart());
    try {
      const res = await axios.get("http://localhost:5000/api/places");
      dispatch(getPlaceSuccess(res.data));
    } catch (err) {
      dispatch(getPlaceFailure());
    }
  };

// export const logout = async (dispatch, user) => {
//     try {
//       const res = await userRequest.post("/auth/logout", user);
//       dispatch(logout(res.data));
//     } catch{}
//   };