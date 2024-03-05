import { useDispatch, useSelector } from "react-redux";
import "./Bullet.css";
import { useEffect, useRef, useState } from "react";
import { setMousePosition } from "../../../features/MousePosition/MousePosition";
import { setExplosionPosition } from "../../../features/ExplosionPosition/ExplosionPosition";

const Bullet = () => {
  const dispatch = useDispatch();
  const { top, left, width, isRight } = useSelector((state) => {
    return state.parametersTank;
  });
  const [topState, setTopState] = useState(top);
  const [leftState, setLeftState] = useState(left);

  const { isBullet, x, y } = useSelector((state) => {
    return state.mousePosition;
  });

  const DanRef = useRef();

  useEffect(() => {
    if (isBullet) {
      const interval = setInterval(() => {
        const vitriDan = DanRef?.current?.getBoundingClientRect();
        const distanceX = x - vitriDan?.x;
        const distanceY = y - vitriDan?.y;

        const stepsX = distanceX / 50; //=== 50
        const stepsY = distanceY / Math.abs(stepsX); //=== 33
        setLeftState((prevLeft) => prevLeft + 50);
        setTopState((prevTop) => prevTop + stepsY);
      }, 100);

      // --------------------observer Bullet move--------------------------
      const bulletObserver = new MutationObserver((mutationList) => {
        let vitridann22;
        mutationList.map((mutaTion) => {
          vitridann22 = mutaTion.target.getBoundingClientRect();
        });

        if (vitridann22.x + 30 >= x) {
          clearInterval(interval);
          dispatch(setMousePosition({ isBullet: false }));
          dispatch(setExplosionPosition({ isExplosion: true, x, y }));
        }
      });

      bulletObserver.observe(DanRef?.current, { attributes: true });
    } else {
      setTopState(top);
      setLeftState(left);
    }
  }, [isBullet, top, left, x, y, dispatch]);

  return (
    <>
      {isBullet && (
        <div
          ref={DanRef}
          className="bullet"
          style={{
            top: topState,
            backgroundColor: "red",
            left: isRight ? leftState + width : leftState - 40,
          }}
        />
      )}
    </>
  );
};

export default Bullet;
