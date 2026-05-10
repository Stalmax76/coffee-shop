import clsx from 'clsx';
import { ArticleBlock } from '@components/content/ArticleBlock';
import { motion } from 'framer-motion';
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
      <section
         className={clsx('page-description', className)}
         aria-labelledby={title ? 'page-description-title' : undefined}
      >
         <div className="page-description__container">
            <motion.figure
               className="page-description__image"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
            >
               <img src={image} loading="lazy" alt={alt || ''} />
            </motion.figure>

            <motion.div
               className="page-description__content"
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
            >
               <ArticleBlock title={title} paragraphs={text} decor={decor} />
            </motion.div>
         </div>
      </section>
   );
};
