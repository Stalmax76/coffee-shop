import imgUrl from '@img/about/product.webp';
import clsx from 'clsx';
import styles from './_style.module.scss';

export type CardVariant = 'default' | 'promo';
export type ProductCardProps = {
  variant?: CardVariant;
  image?: string;
  title: string;
  country?: string;
  price: string;
  className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  variant = 'default',
  image = imgUrl,
  title,
  country,
  price,
  className = '',
}) => {
  return (
    <article className={clsx(`${styles.productCard}  ${styles[variant]}`, className)}>
      <div className={styles.productCard__image}>
        <img src={image} alt='Image of product' />
      </div>
      <div className={styles.productCard__content}>
        <h3 className={styles.productCard__title}>{title}</h3>
        <div className={styles.productCard__info}>
          {country && <p className={styles.productCard__country}>{country}</p>}
          <p className={styles.productCard__price}>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
