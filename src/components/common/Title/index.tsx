import { TitleDecor } from '@components/UI/TitleDecor';
import clsx from 'clsx';
import React from 'react';
import '../_common.scss';
// import styles from './style.module.scss';

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
    <div className={clsx('title', parrentClass)}>
      {React.createElement(
        tag,
        { className: clsx('title__text', color, variant) },
        text ?? children
      )}
      {withDecor && <TitleDecor color={color} />}
    </div>
  );
};

export default Title;
