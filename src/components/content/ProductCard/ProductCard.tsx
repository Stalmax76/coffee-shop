import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Price from '@components/UI/Price';
import { Title } from '@components/UI/Title';
import { motion } from 'framer-motion';
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
      <motion.article
         className={clsx('product-card', className)}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
         aria-label={`
         Product card: ${title}`}
      >
         <Link to={link} className="product-card__link-image" aria-label={`Open ${title} details`}>
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
      </motion.article>
   );
};
