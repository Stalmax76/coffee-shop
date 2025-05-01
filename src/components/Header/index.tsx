import Logo from '../UI/Logo';
import './_header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <Logo />
        </div>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <a href='#'>Coffee house</a>
            </li>
            <li className='header__nav-item'>
              <a href='#'>Our coffee</a>
            </li>
            <li className='header__nav-item'>
              <a href='#'>For your pleasure</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
