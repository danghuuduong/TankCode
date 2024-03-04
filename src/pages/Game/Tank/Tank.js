import { useSelector } from "react-redux";
import "./Tank.css";
const Tank = () => {
  const parameters = useSelector((state) => {
    return state.parametersTank;
  });

  return (
    <div
      className="tank"
      style={{
        width: parameters.width,
        left: parameters.left,
        top: parameters.top,
        transform: `scaleX(${parameters.isRight ? -1 : 1})`,
        transition: "0.2s linear",
      }}
    />
  );
};

export default Tank;
