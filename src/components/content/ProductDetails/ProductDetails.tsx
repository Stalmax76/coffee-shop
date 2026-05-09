import type { Product } from '@typesLocal/product';
import { Title } from '@components/UI/Title';
import imgDefault from '@img/products/product_01.webp';
type Props = {
   product: Product;
};
import './_productDetails.scss';
export const ProductDetails: React.FC<Props> = ({ product }) => {
   const { country, price, description } = product;
   const title = 'About it';
   const image = imgDefault;
   return (
      <article className="product-details">
         <div className="product-details__container">
            <div className="product-details__body">
               <div className="product-details__image">
                  <img src={image} loading="lazy" alt={title} />
               </div>
               <div className="product-details__content">
                  <Title tag="h2" color="black" withDecor className="product-details__title">
                     {title}
                  </Title>
                  <div className="product-details__row">
                     <span className="product-details__label">Country:</span>
                     <span className="product-details__value">{country}</span>
                  </div>
                  {/* description optional */}
                  {description && (
                     <div className="product-details__description">
                        <span className="product-details__label">Description:</span>
                        {description}
                     </div>
                  )}
                  <div className="product-details__row">
                     <span className="product-details__label">Price:</span>
                     <span className="product-details__value">{price}</span>
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
};
