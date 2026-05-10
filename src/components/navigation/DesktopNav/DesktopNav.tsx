import { NavLink } from 'react-router-dom';
import './_desktopNav.scss';

export const DesktopNav = () => {
   const handleNavClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   return (
      <nav className="desktop-nav" aria-label="Main navigation">
         <ul className="desktop-nav__list">
            <li className="desktop-nav__item">
               <NavLink end to="/" onClick={handleNavClick}>
                  Coffee house
               </NavLink>
            </li>
            <li className="desktop-nav__item">
               <NavLink to="our-coffee">Our coffee</NavLink>
            </li>
            <li className="desktop-nav__item">
               <NavLink to="pleasure">For your pleasure</NavLink>
            </li>
         </ul>
      </nav>
   );
};
