import React from 'react';
import { TitleDecor } from '../../UI/TitleDecor';
import styles from './style.module.scss';

type HeadingTag = 'h1' | 'h2';

type TitleProps = {
  variant?: 'page' | 'article';
  color?: 'white' | 'black';
  text?: string;
  withDecor?: boolean;
  children?: React.ReactNode;
  parrentClass?: string;
};

const Title: React.FC<TitleProps> = ({
  variant = 'page',
  color = 'white',
  text,
  withDecor = true,
  children,
  parrentClass = '',
}) => {
  const tag: HeadingTag = variant === 'page' ? 'h1' : 'h2';
  return (
    <div className={styles.title + (parrentClass ? ` ${parrentClass}` : '')}>
      {React.createElement(
        tag,
        { className: [styles.title__text, styles[color], styles[variant]].join(' ') },
        // { className: `${styles.title__text} ${styles[color]} ${styles[variant]}` },
        text ?? children
      )}
      {withDecor && <TitleDecor color={color} />}
    </div>
  );
};

export default Title;
