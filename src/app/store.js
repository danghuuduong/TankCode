import { configureStore } from "@reduxjs/toolkit";
import TankMovementSlice from "../features/TankMovement/TankMovementSlice";
import  mousePositionSlice  from "../features/MousePosition/MousePosition";

export const store = configureStore({
  reducer: {
    mousePosition: mousePositionSlice,
    parametersTank: TankMovementSlice,
  },
});
