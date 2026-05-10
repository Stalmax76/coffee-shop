import { Logo } from '@components/UI/Logo';
import { TitleDecor } from '@components/UI/TitleDecor';
import { NavLink } from 'react-router-dom';
import './_footer.scss';

export const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container">
            <div className="footer__content">
               <div className="footer__logo">
                  <NavLink to="/" aria-label="Go to homepage">
                     {' '}
                     <Logo color="black" />
                  </NavLink>
               </div>
               <ul className="footer__items">
                  <li className="footer__item">
                     <NavLink to="/" end>
                        Coffee house
                     </NavLink>
                  </li>
                  <li className="footer__item">
                     <NavLink to="our-coffee">Our coffee</NavLink>
                  </li>
                  <li className="footer__item">
                     <NavLink to="pleasure">For your pleasure</NavLink>
                  </li>
               </ul>
            </div>
            <TitleDecor color="black" />
         </div>
      </footer>
   );
};
