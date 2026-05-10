import Price from '@components/UI/Price';

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
         <a href={href} className="promoCard__picture-link" aria-label={`Open ${title} details`}>
            <figure className="promoCard__picture">
               <img src={image} loading="lazy" alt={title} className="promoCard__image" />
            </figure>
         </a>

         <div className="promoCard__content">
            <a href="href" className="promoCard__title-link">
               <h3 className="promoCard__title">{title}</h3>
            </a>
            <p className="promoCard__price">
               <Price value={price} position="after" />
            </p>
         </div>
      </article>
   );
};
