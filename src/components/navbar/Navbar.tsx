import styles from "./Navbar.module.scss";
import logo from "../../../public/logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.lenguaje}>
            ES
          </div>
          <div className={styles.searchContainer}>
            <input type="text" />
            <FiSearch style={{ height: 25, width: 25 }} />
          </div>
        </div>
        <div className={styles.center}>
          <img src={logo} alt="Logo Santiago Segurado" />
          <div className={styles.logoBrand}>
            <h3>Santiago</h3>
            <h3>Segurado</h3>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.menuItem} >
            REGISTRO
          </div>
          <div className={styles.menuItem} >
            ACCESO
          </div>
          <div className={`${styles.menuItem} ${styles.cartItem}`}>
            <div className={styles.cartCounter}>
              <span>1</span>
            </div>
            <AiOutlineShoppingCart style={{ width:25, height:25 }}/>
          </div>
        </div>
      </div>
    </nav>
  );
};
