import imgWhite from '@img/icons/logo.svg?url';
import imgBlack from '@img/icons/logoBlack.svg?url';
import clsx from 'clsx';
import './_styles-ui-component.scss';

type LogoColor = 'white' | 'black';
type LogoProps = {
  color?: LogoColor;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ color = 'white', className }) => {
  const imgPath = color === 'white' ? imgWhite : imgBlack;
  return (
    <div className={clsx('logo', `logo--${color}`, className)}>
      <img src={imgPath} alt='Logo' />
    </div>
  );
};

export default Logo;
