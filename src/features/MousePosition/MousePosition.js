import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBullet: false,
  x: 0,
  y: 0,
};

export const mousePositionSlice = createSlice({
  name: "mousePosition",
  initialState,
  reducers: {
    setMousePosition: (state, actions) => {
      return {
        ...state,...actions.payload
      };
    },
  },
});
export const { setMousePosition } = mousePositionSlice.actions;

export default mousePositionSlice.reducer;
