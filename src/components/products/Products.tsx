import styles from "./Products.module.scss";
import producto1 from "../../../public/Producto1.png";
import producto2 from "../../../public/Producto2.png";
import producto3 from "../../../public/Produto3.png";
import producto4 from "../../../public/Producto4.png";
import producto5 from "../../../public/Producto5.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerTopProducts}>
        <h2>Productos mas buscados</h2>
        <span>
          Encuentre su mueble ideal que se adapte a su gusto con nuestra gran
          selección de sofas mesas y de sillas
        </span>
      </div>

      <div className={styles.bodyTopProducts}>
        <div className={styles.product}>
          <img src={producto1} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
            <div className={styles.btnSearch}>
              <FiSearch />
            </div>
            <div className={styles.btnFav}>
              <AiOutlineHeart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <img src={producto2} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <img src={producto3} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <img src={producto4} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <img src={producto5} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <img src={producto1} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <img src={producto2} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <img src={producto3} alt="" />

          <div className={styles.infoContainer}>
            <p>Trenton modular sofa_3</p>
            <h3>$2500</h3>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnCart}>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
