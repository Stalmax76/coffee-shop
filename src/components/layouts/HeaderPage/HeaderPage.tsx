import clsx from 'clsx';
import { Title } from '@components/UI/Title';
import defaultBg from '@img/common/bg.webp';
import './_header-page.scss';

type HeaderPageProps = {
   className?: string;
   title: string;
   background?: string;
};

const DEFAULT_BG = defaultBg;
export const HeaderPage = ({ title, background, className }: HeaderPageProps) => {
   return (
      <div
         className={clsx('header-page', className)}
         style={{ backgroundImage: `url(${background ?? DEFAULT_BG})` }}
      >
         <div className="header-page__title">
            <Title tag="h2" color="white">
               {title}
            </Title>
         </div>
      </div>
   );
};
