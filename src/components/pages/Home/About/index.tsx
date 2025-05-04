import Title from '@components/common/Title';
import styles from './styles.module.scss';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__header}>
          <Title variant='article' text='About us' color='black' withDecor />
        </div>
        <div className={styles.about__content}>
          <p className={styles.about__text}>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention so
            questions. As greatly removed calling pleased improve an. Last ask him cold feel met
            spot shy want. Children me laughing we prospect answered followed. At it went s song
            that held help face.
          </p>

          <p>
            Now residence dashwoods she excellent you. Shade being under his bed her, Much read on
            as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but
            confined day end marriage. Eagerness furniture set preserved far recommend. Did even but
            nor are most gave hope. Secure active living depend son repair day ladies now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
