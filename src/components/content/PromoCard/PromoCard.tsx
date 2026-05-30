import Price from '@components/UI/Price';
import { Link } from 'react-router-dom';
import './_promoCard.scss';

type PromoCardProps = {
   image: string;
   title: string;
   price: number;
   href: string;
};

export const PromoCard: React.FC<PromoCardProps> = ({ image, title, price, href }) => {
   return (
      <article className="promoCard" aria-label={`Promo card: ${title}`}>
         <Link to={href} className="promoCard__picture-link" aria-label={`Open ${title} details`}>
            <figure className="promoCard__picture">
               <img src={image} loading="lazy" alt={title} className="promoCard__image" />
            </figure>
         </Link>

         <div className="promoCard__content">
            <Link to={href} className="promoCard__title-link">
               <h3 className="promoCard__title">{title}</h3>
            </Link>
            <p className="promoCard__price">
               <Price value={price} position="after" />
            </p>
         </div>
      </article>
   );
};
