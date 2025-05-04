import Title from '@components/common/Title';
import Button from '@components/UI/Button';
import bgUrl from '@img/home/hero/bg.webp';
import bgUrl_1x from '@img/home/hero/bg_1.5x.webp';
import bgUrl_2x from '@img/home/hero/bg_2x.webp';
import bgUrl_3x from '@img/home/hero/bg_3x.webp';
import styles from './_styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <picture className={styles.hero__bg}>
        <source srcSet={`${bgUrl_3x} 3x, ${bgUrl_2x} 2x, ${bgUrl_1x} 1.5x`} type='image/webp' m />
        <img src={bgUrl} alt='background' loading='lazy' />
      </picture>
      <div className={styles.hero__container}>
        <Title
          variant='page'
          text='Everything You Love About Coffee'
          withDecor
          color='white'
          parrentClass={styles.hero__title}
        />
        <div className={styles.hero__description}>
          <p>We makes every day full of energy and taste</p>
          <p>Want to try our beans?</p>
          <Button label='More' onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
