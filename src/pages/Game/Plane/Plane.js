import { useEffect, useState } from "react";
import Health from "./Health/Health";
import "./Plane.css";
import { useSelector } from "react-redux";
const Plane = () => {
  const [parametersTankPlane, setParametersTankPlane] = useState({
    x: 1000,
    isShow: true,
  });
  const topPlane = 20;

  const explosionPosition = useSelector((state) => {
    return state.explosionPosition;
  });
  useEffect(() => {
    if (
      parametersTankPlane.x <= explosionPosition.x &&
      parametersTankPlane.x + 350 >= explosionPosition.x
    ) {
      console.log("🚀 ~ explosionPosition ~ bum:");
    }
  }, [explosionPosition, parametersTankPlane.x]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParametersTankPlane((prev) => {
        const newPosition = prev.x - 20;
        if (newPosition <= -800) {
          const positionNew =
            Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
          return { ...prev, x: positionNew, isShow: false };
        }
        return { ...prev, x: newPosition, isShow: true };
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {parametersTankPlane.isShow && (
        <div
          className="plane"
          style={{
            left: `${parametersTankPlane.x}px`,
            top: topPlane,
          }}
        >
          <Health />
        </div>
      )}
    </>
  );
};

export default Plane;
