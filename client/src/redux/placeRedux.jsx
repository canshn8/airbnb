import { createSlice } from "@reduxjs/toolkit";


const placeSlice = createSlice({
    name: "place",
    initialState: {
        products: [],
        favorites: [],
        quantity: 0,
        total: 0,
    },

    reducers: {
        //İlan Ekleme
        placePostStart: (state) => {
            state.isFetching = true
        },
        placePostSuccess: (state, action) => {
            state.isFetching = false
            state.currentPlace = action.payload;
        },
        placePostFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        //İlan Güncelleme
        placePutStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        placePutSuccess: (state, action) => {
            state.isFetching = false
            state.places[
                state.places.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.place;
        },
        placePutFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        //İlan Silme
        placeDelStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        placeDelSuccess: (state, action) => {
            state.isFetching = false
            state.places.splice(
                state.places.findIndex((item) => item._id === action.payload.id),
                1
            );
        },
        placeDelFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        getPlaceStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getPlaceSuccess: (state, action) => {
            state.isFetching = false;
            state.places = action.payload;
        },
        getPlaceFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    },
});

export const { getPlaceStart, getPlaceSuccess, getPlaceFailure,placePostStart, placePostSuccess, placePostFailure, placePutStart, placePutSuccess, placePutFailure, placeDelStart, placeDelSuccess, placeDelFailure } = placeSlice.actions;
export default placeSlice.reducer;