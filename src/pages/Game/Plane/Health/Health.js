import { useState } from "react";
import "./Health.css";
const Health = () => {
  const [healthState, setHeadlthState] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="health-bar">
      {healthState.map((health) => (
        <div className="health-bar-fill" key={health}/>
      ))}
    </div>
  );    
};

export default Health;
