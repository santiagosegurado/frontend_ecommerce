import styles from "./Slider.module.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import imgFondo1 from "../../../public/imagenFondo1.png";
import imgFondo2 from "../../../public/imagenFondo2.png";
import { useState } from "react";

export const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSlider = (direction: string) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 1);
    } else {
      setSliderIndex(sliderIndex < 1 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrow}
        style={{ left: 10 }}
        onClick={() => handleSlider("left")}
      >
        <BiLeftArrow />
      </div>

      <div
        className={styles.wrapper}
        style={{
          transform: `translateX(${sliderIndex * -115}vw)`,
        }}
      >
        <div className={styles.slider}>
          <div className={styles.infoContainer}>
            <h2>Rocket single seater</h2>
            <input type="button" value="Comprar Ahora" />
          </div>
          <div className={styles.imgContainer}>
            <img src={imgFondo1} alt="" />
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.infoContainer}>
            <h2>Asgaard sofa</h2>
            <input type="button" value="Comprar Ahora" />
          </div>
          <div className={styles.imgContainer}>
            <img src={imgFondo2} alt="" />
          </div>
        </div>
      </div>

      <div
        className={styles.arrow}
        style={{ right: 10 }}
        onClick={() => handleSlider("right")}
      >
        <BiRightArrow />
      </div>
    </div>
  );
};
