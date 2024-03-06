import "./Health.css";

const Health = () => {
  const healthList = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="health-bar">
      {healthList.map((health) => (
        <div className="health-bar-fill" key={health} />
      ))}
    </div>
  );
};

export default Health;
