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
      <article className="promoCard">
         <a href={href}>
            <div className="promoCard__picture">
               <img src={image} alt="" className="promoCard__image" />
            </div>
         </a>

         <div className="promoCard__content">
            <a href="#">
               <h3 className="promoCard__title">{title}</h3>
            </a>
            <p className="promoCard__price">
               <Price value={price} position="after" />
            </p>
         </div>
      </article>
   );
};
