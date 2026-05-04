import clsx from 'clsx';
import { ArticleBlock } from '@components/content/ArticleBlock';
import './_pageDescription.scss';

type PageDescriptionProps = {
   text: string | string[];
   image?: string;
   alt?: string;
   title?: string;
   decor?: boolean;
   className?: string;
};
export const PageDescription = ({
   text,
   title,
   decor,
   image,
   alt,
   className,
}: PageDescriptionProps) => {
   return (
      <section className={clsx('page-description', className)}>
         <div className="page-description__container">
            <div className="page-description__image">
               <img src={image} alt={alt || ''} />
            </div>
            <ArticleBlock title={title} paragraphs={text} decor={decor} />
         </div>
      </section>
   );
};
