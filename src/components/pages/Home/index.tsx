import About from '@components/pages/Home/About';
import Hero from '@components/pages/Home/Hero';
import styles from './_styles.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <About />
    </div>
  );
};

export default Home;
