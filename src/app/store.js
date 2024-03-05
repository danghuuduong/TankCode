import { configureStore } from "@reduxjs/toolkit";
import TankMovementSlice from "../features/TankMovement/TankMovementSlice";
import  mousePositionSlice  from "../features/MousePosition/MousePosition";
import ExplosionPosition from "../features/ExplosionPosition/ExplosionPosition";

export const store = configureStore({
  reducer: {
    mousePosition: mousePositionSlice,
    parametersTank: TankMovementSlice,
    explosionPosition: ExplosionPosition,
  },
});
