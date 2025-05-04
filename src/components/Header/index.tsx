import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../UI/Logo';
import './_header.scss';

const Header = () => {
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
      <div className='header__container'>
        <div className='header__logo'>
          <NavLink to='/'>
            <Logo />
          </NavLink>
        </div>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <NavLink end to='.'>
                Coffee house
              </NavLink>
            </li>
            <li className='header__nav-item'>
              <NavLink to='OurCoffee'>Our coffee</NavLink>
            </li>
            <li className='header__nav-item'>
              <NavLink to='Pleasure'>For your pleasure</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
