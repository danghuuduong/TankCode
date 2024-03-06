import { useEffect, useState } from "react";
import Health from "./Health/Health";
import "./Plane.css";
import { useSelector } from "react-redux";

const Plane = () => {
  const topPlane = 20;

  const [parametersPlane, setParametersPlane] = useState({
    x: 1000,
    y: topPlane,
    isShow: true,
  });
  const [shotHit, setShotHit] = useState(false);

  const explosionPosition = useSelector((state) => {
    return state.explosionPosition;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (shotHit) {
        setParametersPlane((prev) => {
          const newPositionY = prev.y + 30;

          if (newPositionY >= 1000) {
            clearInterval(interval);
            setParametersPlane({...parametersPlane,isShow:false})
          }
          return { ...prev, y: newPositionY };
        });
      } else {
        setParametersPlane((prev) => {
          const newPosition = prev.x - 20;
          if (newPosition <= -800) {
            const positionNew =
              Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
            return { ...prev, x: positionNew, isShow: false };
          }
          return { ...prev, x: newPosition, isShow: true };
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [shotHit]);

  useEffect(() => {
    if (explosionPosition.isExplosion) {
      const planeX = parametersPlane.x;
      const planeY = 20;
      const explosionX = explosionPosition.x;
      const explosionY = explosionPosition.y;
      if (
        planeX <= explosionX &&
        planeX + 350 >= explosionX &&
        planeY <= explosionY &&
        planeY + 170 >= planeY
      ) {
        setShotHit(true);
      }
    }
  }, [
    explosionPosition.isExplosion,
    explosionPosition.x,
    explosionPosition.y,
    parametersPlane.x,
  ]);
  return (
    <>
      {parametersPlane.isShow && (
        <div
          className={
            `plane ${shotHit && "shotHit"}`
          }
          style={{
            left: `${parametersPlane.x}px`,
            top: parametersPlane.y,
          }}
        >
          <Health />
        </div>
      )}
    </>
  );
};

export default Plane;
