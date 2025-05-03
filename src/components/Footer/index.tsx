import Logo from '@components/UI/Logo';
import { TitleDecor } from '@components/UI/TitleDecor';
import { NavLink } from 'react-router-dom';
import './_footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__logo'>
            <NavLink to='/'>
              {' '}
              <Logo color='black' />
            </NavLink>
          </div>
          <div className='footer__items'>
            <div className='footer__item'>
              <NavLink to='.' end>
                Coffee house
              </NavLink>
            </div>
            <div className='footer__item'>
              <NavLink to='OurCoffee'>Our coffee</NavLink>
            </div>
            <div className='footer__item'>
              <NavLink to='Pleasure'>For your pleasure</NavLink>
            </div>
          </div>
        </div>
        <TitleDecor />
      </div>
    </footer>
  );
};

export default Footer;
