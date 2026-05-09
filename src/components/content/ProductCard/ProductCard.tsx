import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Price from '@components/UI/Price';
import { Title } from '@components/UI/Title';
import imgUrl from '@img/ourCoffee/product.webp?url';
import './_productCard.scss';
// import styles from './_style.module.scss';

export type ProductCardProps = {
   title: string;
   country?: string;
   price: number;
   image: string;
   className?: string;
   link?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
   image = imgUrl,
   title,
   country,
   price,
   className = '',
   link = '#',
}) => {
   return (
      <article className={clsx('product-card', className)}>
         <Link to={link} className="product-card__link-image">
            <img src={image} loading="lazy" alt={title} className="product-card__image" />
         </Link>

         <div className={'product-card__content'}>
            <Link to={link} className="product-card__link-title">
               <Title tag="h4" color="black">
                  {title}
               </Title>
            </Link>

            {country && <p className="product-card__country">{country}</p>}
            <div className="product-card__price">
               <Price value={price} currency="$" position="after" />
            </div>
         </div>
      </article>
   );
};
