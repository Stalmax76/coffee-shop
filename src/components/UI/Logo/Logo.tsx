import imgWhite from '@img/icons/logo.svg?url';
import imgBlack from '@img/icons/logoBlack.svg?url';
import clsx from 'clsx';
// added changes for deployment
import '_/Logo.scss';

type LogoColor = 'white' | 'black';
type LogoProps = {
   color?: LogoColor;
   href?: string;
   className?: string;
};

export const Logo: React.FC<LogoProps> = ({ color = 'white', href, className }) => {
   const imgPath = color === 'white' ? imgWhite : imgBlack;

   const content = (
      <div className={clsx('logo', `logo--${color}`, className)}>
         <img src={imgPath} loading="lazy" alt="Logo" className="logo__img" />
      </div>
   );

   return href ? <a href={href}>{content}</a> : content;
};
