import About from '@components/pages/Home/About';
import Best from '@components/pages/Home/Best';
import Hero from '@components/pages/Home/Hero';
import styles from './_styles.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <About />
      <Best />
    </div>
  );
};

export default Home;
