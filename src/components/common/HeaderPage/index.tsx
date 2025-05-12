import imgUrl from '@img/about/bg.webp';
import clsx from 'clsx';
import '../_common.scss';
import Title from '../Title';

type HeaderPageProps = {
  className?: string;
  textTitle?: string;
  imageBg?: string;
};

const HeaderPage: React.FC<HeaderPageProps> = ({ imageBg, textTitle, className }) => {
  const imgUrlBg = imageBg || imgUrl;
  const title = textTitle || 'About us';
  const parrentClass = className || '';
  return (
    <div className={clsx('headerPage', parrentClass)}>
      <div className={'headerPage__bg'}>
        <img src={imgUrlBg} alt='background image' />
      </div>
      <div className={'headerPage__container'}>
        <div className={'headerPage__title'}>
          <Title variant='page' text={title} color='white' withDecor={false} />
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
