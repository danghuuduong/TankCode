import { useEffect, useState } from "react";
import planeImg from "../../../img/plane.png"; // with import
import Health from "./Health/Health";
import "./Plane.css";
const Plane = () => {
  const [position, setPosition] = useState(500);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 20; // Tính toán vị trí mới dựa trên thời gian và tốc độ
        if (newPosition <= -200) {
          return 1000; // Đảm bảo vật thể di chuyển chính xác đến vị trí cuối cùng
        }
        return newPosition;
      });
    }, 100);

    return () => clearInterval(interval); // Hủy interval khi component unmount
  }, []);

  return (
    <div
      className="plane"
      style={{
        left: `${position}px`,
      }}
    >
      <Health />
      <img src={planeImg} />
    </div>
  );
};

export default Plane;
