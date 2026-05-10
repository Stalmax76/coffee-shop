import type { Product } from '@typesLocal/product';
import { Title } from '@components/UI/Title';
import { motion } from 'framer-motion';
import imgDefault from '@img/products/product_01.webp';
type Props = {
   product: Product;
};
import './_productDetails.scss';
export const ProductDetails: React.FC<Props> = ({ product }) => {
   const { country, price, description } = product;
   const title = 'About it';
   const image = imgDefault;
   const normalizedDescription = Array.isArray(description)
      ? description
      : description
        ? [description]
        : [];

   return (
      <motion.article
         className="product-details"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         aria-labelleby="Product details-title"
      >
         <div className="product-details__container">
            <div className="product-details__body">
               <motion.figure
                  className="product-details__image"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
               >
                  <img src={image} loading="lazy" alt={title} />
               </motion.figure>
               <motion.div
                  className="product-details__content"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
               >
                  <Title
                     // id="product-details-title"
                     tag="h2"
                     color="black"
                     withDecor
                     className="product-details__title"
                  >
                     {title}
                  </Title>
                  <dl className="product-details__info">
                     <div className="product-details__row">
                        <dt className="product-details__label">Country:</dt>
                        <dd className="product-details__value">{country}</dd>
                     </div>

                     {normalizedDescription.length > 0 && (
                        <div className="product-details__description">
                           <dt className="product-details__label">Description:</dt>
                           <dd className="product-details__value">
                              {normalizedDescription.map((p, i) => (
                                 <p key={i}>{p}</p>
                              ))}
                           </dd>
                        </div>
                     )}

                     <div className="product-details__row">
                        <dt className="product-details__label">Price:</dt>
                        <dd className="product-details__value">{price}$</dd>
                     </div>
                  </dl>
               </motion.div>
            </div>
         </div>
      </motion.article>
   );
};
