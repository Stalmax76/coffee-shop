import { Title } from '@components/UI/Title';
import './_articleBlock.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

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
      <motion.article
         className={clsx(className, 'text-block')}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
         aria-label={title ? `Article section: ${title}` : 'Article section'}
      >
         <div className="text-block__body">
            {title && (
               <Title tag="h3" color="black" withDecor={decor}>
                  {title}
               </Title>
            )}
            {normalizedParagraphs.length > 0 && (
               <div className="text-block__text text" role="paragraph-group">
                  {normalizedParagraphs.map((p, i) => (
                     <p key={i}>{p}</p>
                  ))}
               </div>
            )}
         </div>
      </motion.article>
   );
};
