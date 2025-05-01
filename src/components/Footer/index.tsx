import Logo from '@components/UI/Logo';
import { TitleDecor } from '@components/UI/TitleDecor';
import './_footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__logo'>
            <Logo color='black' />
          </div>
          <div className='footer__items'>
            <div className='footer__item'>
              <a href='#'>Coffee house</a>
            </div>
            <div className='footer__item'>
              <a href='#'>Our coffee</a>
            </div>
            <div className='footer__item'>
              <a href='#'>For your pleasure</a>
            </div>
          </div>
        </div>
        <TitleDecor />
      </div>
    </footer>
  );
};

export default Footer;
