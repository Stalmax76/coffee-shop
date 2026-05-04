import { Title } from '@components/UI/Title';
import './_articleBlock.scss';
import clsx from 'clsx';

type ArticleBlockProps = {
   title?: string;
   paragraphs?: string[] | string;
   className?: string;
   decor?: boolean;
};

export const ArticleBlock = ({ title, className, decor, paragraphs }: ArticleBlockProps) => {
   const normalizedParagraphs = Array.isArray(paragraphs)
      ? paragraphs
      : paragraphs
        ? [paragraphs]
        : [];
   return (
      <article className={clsx(className, 'text-block')}>
         <div className="text-block__body">
            {title && (
               <Title tag="h3" color="black" withDecor={decor}>
                  {title}
               </Title>
            )}
            {normalizedParagraphs.length > 0 && (
               <div className="text-block__text text">
                  {normalizedParagraphs.map((p, i) => (
                     <p key={i}>{p}</p>
                  ))}
               </div>
            )}
         </div>
      </article>
   );
};
