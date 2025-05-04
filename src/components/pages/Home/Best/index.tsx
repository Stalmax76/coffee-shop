import ProductCard from '@components/common/ProductCard';
import Title from '@components/common/Title';
import imgUrl_1 from '@img/home/products/01.webp';
import imgUrl_2 from '@img/home/products/02.webp';
import imgUrl_3 from '@img/home/products/03.webp';
import styles from './_style.module.scss';
const Best = () => {
  return (
    <section className={styles.best}>
      <div className={styles.best__container}>
        <div className={styles.best__header}>
          <Title variant='article' text='Our best' color='black' withDecor={false} />
        </div>
        <div className={styles.best__items}>
          <ProductCard
            variant='promo'
            price='$4.99'
            title='Solimo Coffee Beans 2 kg'
            className='best-item'
            image={imgUrl_1}
          />
          <ProductCard
            variant='promo'
            price='16.99$'
            title='Presto Coffee Beans 1 kg'
            className='best-item'
            image={imgUrl_2}
          />
          <ProductCard
            variant='promo'
            price='9.99$'
            title='AROMISTICO Coffee 1 kg'
            className='best-item'
            image={imgUrl_3}
          />
        </div>
      </div>
    </section>
  );
};
export default Best;
