import imgUrl from '@img/about/product.webp';
import clsx from 'clsx';
import '../_common.scss';
// import styles from './_style.module.scss';

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
    <article className={clsx('productCard', variant, className)}>
      <div className={'productCard__image'}>
        <img src={image} alt='Image of product' />
      </div>
      <div className={'productCard__content'}>
        <h3 className={'productCard__title'}>{title}</h3>
        <div className={'productCard__info'}>
          {country && <p className={'productCard__country'}>{country}</p>}
          <p className={'productCard__price'}>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
