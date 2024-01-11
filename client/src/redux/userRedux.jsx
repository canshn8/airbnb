import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser:null,
        accessToken:null,
        isFetching:null,
        isLoggedIn:null,
        error:false,
    },

    reducers:{
        //KULLANICI GİRİŞ iŞLEMLERİ
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        //KULLANICI GİRİŞ İŞLEMLERİ
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload;
            state.isLoggedIn = true
            state.accessToken = action.payload.accessToken
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.accessToken = null
            state.currentUser = null
        },
        //KULLANICI GÜNCELLEME İŞLEMLERİ
        updateUserStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false
            state.users[
                state.users.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.user;
        },
        updateUserFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
    },
});

export const {loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, updateUserStart, updateUserSuccess, updateUserFailure, logout} = userSlice.actions;
export default userSlice.reducer;