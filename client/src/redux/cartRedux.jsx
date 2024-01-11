import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    places: [],
    favorites: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addPlace: (state, action) => {
     state.quantity += 1;
     state.places.push(action.payload);
     state.total += action.payload.price;
    },
    
    addFavorite: (state, action) => {
      state.quantity += 1;
      state.favorites.push(action.payload);
    },
   
    removePlace: (state, action) => {
      let index = state.places.indexOf(action.payload);
      state.places.splice(index, 1)
      state.places = [...state.places] 
      state.total -= action.payload.price;
      state.quantity -= action.payload
    },

    removeFavori(state, action){
      let index = state.favorites.indexOf(action.payload);
      state.favorites.splice(index, 1)
      state.favorites = [...state.favorites] 
      state.quantity -= action.payload
    },

    getPlacesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPlacesSuccess: (state, action) => {
      state.isFetching = false;
      state.places = action.payload;
    },
    getPlacesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addPlace, addFavorite, deleteFromCart, removeFavori,removePlace,getPlaceStart, getPlaceSuccess, getPlaceFailure } = cartSlice.actions;
export default cartSlice.reducer;