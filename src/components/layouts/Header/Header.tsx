import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '@components/UI/Logo';
import { DesktopNav } from '@components/navigation/DesktopNav';
import { MobileNav } from '@components/navigation/MobileNav';
import './_header.scss';

export const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
         <div className="header__container">
            <div className="header__logo">
               <NavLink to="/" aria-label="Go to homepage">
                  <Logo />
               </NavLink>
            </div>

            {/* DESKTOP */}

            <DesktopNav />

            {/* MOBILE */}
            <MobileNav />
         </div>
      </header>
   );
};
