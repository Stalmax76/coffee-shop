import imgDark from '@img/icons/blackGrains.svg?url';
import imgLight from '@img/icons/whiteGrains.svg?url';
import styles from './_style.module.scss';

interface TitleDecorProps {
  color?: 'white' | 'black';
}

export const TitleDecor: React.FC<TitleDecorProps> = ({ color }) => {
  const imgUrl = color === 'white' ? imgLight : imgDark;
  const colorClass =
    color === 'white' ? styles['titleDecor__line--white'] : styles['titleDecor__line--black'];
  return (
    <div className={styles.titleDecor}>
      <span className={`${styles.titleDecor__line} ${colorClass}`}></span>
      <div className={styles.titleDecor__img}>
        <img src={imgUrl} alt='The grains of coffee' />
      </div>
      <span className={`${styles.titleDecor__line} ${colorClass}`}></span>
    </div>
  );
};
