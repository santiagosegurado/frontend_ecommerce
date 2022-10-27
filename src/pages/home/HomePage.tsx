import { Navbar } from '../../components/navbar/Navbar';
import { Slider } from '../../components/slider/Slider';
import styles from './HomePage.module.scss'
import { Categories } from '../../components/category/Categories';
import { Products } from '../../components/products/Products';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}
