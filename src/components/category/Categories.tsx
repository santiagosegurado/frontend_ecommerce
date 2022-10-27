import styles from './Category.module.scss';
import imagenCategoria1 from '../../../public/imagenCategoria1.png'
import imagenCategoria2 from '../../../public/imagenCategoria2.png'


export const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        <img src={imagenCategoria1} alt="" />
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>Mesas</h2>
          <input type="button" value="Ver Mas" />
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <img src={imagenCategoria2} alt="" />
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>Sofas</h2>
          <input type="button" value="Ver Mas" />
        </div>
      </div>
    </div>
  );
};
