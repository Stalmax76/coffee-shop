import './_styles-ui-component.scss';

import imgPath from '@img/icons/logo.svg?url';

const Logo: React.FC = () => {
  return (
    <div className='logo'>
      <img src={imgPath} alt='Logo' />
    </div>
  );
};

export default Logo;
