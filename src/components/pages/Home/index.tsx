import Hero from '@components/pages/Home/Hero';
import styles from './_styles.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
    </div>
  );
};

export default Home;
