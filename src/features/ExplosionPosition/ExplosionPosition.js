import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExplosion: false,
  x: 0,
  y: 0,
};

export const explosionPositionSlice = createSlice({
  name: "explosionPosition",
  initialState,
  reducers: {
    setExplosionPosition: (state, actions) => {
      return {
        ...state,...actions.payload
      };
    },
  },
});
export const { setExplosionPosition } = explosionPositionSlice.actions;

export default explosionPositionSlice.reducer;
