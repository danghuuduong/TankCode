import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRight: true,
  left: 10,
  width: 400,
  top: 480,
};

export const tankMovementSlice = createSlice({
  name: "parametersTank",
  initialState,
  reducers: {
    movementLeft: (state) => {
      if (state.left > 0) {
        return {
          ...state,
          isRight: false,
          left: state.left - 15,
        };
      }
    },
    movementRight: (state) => {
      if (state.left < 1280 - state.width) {
        return {
          ...state,
          isRight: true,
          left: state.left + 15,
        };
      }
    },
  },
});
export const { movementLeft, movementRight } = tankMovementSlice.actions;

export default tankMovementSlice.reducer;
