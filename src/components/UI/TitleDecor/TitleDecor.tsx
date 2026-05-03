import imgDark from '@img/icons/blackGrains.svg?url';
import imgLight from '@img/icons/whiteGrains.svg?url';
import './_titleDecor.scss';
import clsx from 'clsx';

interface TitleDecorProps {
   color?: 'white' | 'black';
}

export const TitleDecor: React.FC<TitleDecorProps> = ({ color }) => {
   const imgUrl = color === 'white' ? imgLight : imgDark;

   return (
      <div className={clsx('titleDecor', `titleDecor--${color}`)}>
         <span className={clsx('titleDecor__line', `titleDecor__line--${color}`)} />
         <div className="titleDecor__img">
            <img src={imgUrl} alt="The grains of coffee" />
         </div>
         <span className={clsx('titleDecor__line', `titleDecor__line--${color}`)} />
      </div>
   );
};
