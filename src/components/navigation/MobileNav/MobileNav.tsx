import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import './_mobileNav.scss';
export const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();
   const pages = [
      { label: 'Coffee house', to: '/' },
      { label: 'Our coffee', to: '/our-coffee' },
      { label: 'For your pleasure', to: '/pleasure' },
   ];

   const current = pages.find((p) => p.to === location.pathname)?.label || 'Menu';
   const handleNavigate = (to: string) => {
      setIsOpen(false);
      if (to === '/') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
   };
   return (
      <nav className="mobile-nav" aria-label="Mobile navigation">
         <button
            className={`mobile-nav__trigger `}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
         >
            {current}
            <span className="mobile-nav__icon">▼</span>
         </button>
         {isOpen && (
            <ul className="mobile-nav__dropdown">
               {pages.map((p) => (
                  <li key={p.to} className="mobile-nav__item">
                     <NavLink
                        to={p.to}
                        onClick={() => handleNavigate(p.to)}
                        className="mobile-nav__link"
                     >
                        {p.label}
                     </NavLink>
                  </li>
               ))}
            </ul>
         )}
      </nav>
   );
};
