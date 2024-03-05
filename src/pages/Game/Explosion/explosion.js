import "./explosion.css";
import explosion from "../../../img/explosion.png"; // with import
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setExplosionPosition } from "../../../features/ExplosionPosition/ExplosionPosition";

const Explosion = () => {
  const dispatch = useDispatch();

  const explosionPosition = useSelector((state) => {
    return state.explosionPosition;
  });

  useEffect(() => {
    if (explosionPosition.isExplosion) {
      setTimeout(() => {
        dispatch(setExplosionPosition({ isExplosion: false }));
      }, 2000);
    }
  }, [dispatch, explosionPosition.isExplosion]);

  return (
    <>
      {explosionPosition.isExplosion && (
        <img
          className="explosion"
          src={explosion}
          style={{ top: explosionPosition.y, left: explosionPosition.x }}
          alt=""
        />
      )}
    </>
  );
};

export default Explosion;
