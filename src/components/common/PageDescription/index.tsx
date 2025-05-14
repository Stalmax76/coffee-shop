import imgUrl from '@img/about/girl.webp';
import Title from '../Title';
import '../_common.scss';

const PageDescription = () => {
  return (
    <section className='pageDescription'>
      <div className='pageDescription__container'>
        <div className='pageDescription__image'>
          <img src={imgUrl} alt='The girl drinks coffee' />
        </div>
        <div className='pageDescription__content'>
          <Title variant='article' text='About our beans' color='black' withDecor />
          <div className='pageDescription__text text--center'>
            <p>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            </p>
            <p>
              Afraid at highly months do things on at. Situation recommend objection do intention so
              questions. As greatly removed calling pleased improve an. Last ask him cold feel met
              spot shy want. Children me laughing we prospect answered followed. At it went is song
              that held help face.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageDescription;
