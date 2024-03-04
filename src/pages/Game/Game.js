import { useEffect } from "react";
import "./Game.css";
import Tank from "./Tank/Tank";
import Plane from "./Plane/Plane";
import Bullet from "./Bullet/Bullet";
import { useDispatch } from "react-redux";
import {
  movementLeft,
  movementRight,
} from "../../features/TankMovement/TankMovementSlice";
import { setMousePosition } from "../../features/MousePosition/MousePosition";
const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.which === 37) return dispatch(movementLeft());
      if (e.which === 39) return dispatch(movementRight());
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleMouseClick = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      dispatch(setMousePosition({ isBullet: true, x, y }));
    };
    window.document.addEventListener("click", handleMouseClick);
    return () => {
      window.document.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div className="game">
      <Tank />
      <Bullet />
      <Plane />
    </div>
  );
};

export default Game;
