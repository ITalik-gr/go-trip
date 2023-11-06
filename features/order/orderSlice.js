import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: 0,
  transfer: 0,
  accommodation: 0,
  extras: ["none"],
  place: '',
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setExtras: (state, { payload }) => {
      state.extras = payload;
    },
    setFlights: (state, { payload }) => {
      state.flights = payload;
    },
    setTransfer: (state, { payload }) => {
      state.transfer = payload;
    },
    setAccommodation: (state, { payload }) => {
      state.accommodation = payload;
    },
    setPlace: (state, { payload }) => {
      state.place = payload;
    },
  },
});

export const { setExtras, setFlights, setTransfer, setAccommodation, setPlace } = orderSlice.actions;
export default orderSlice.reducer;
