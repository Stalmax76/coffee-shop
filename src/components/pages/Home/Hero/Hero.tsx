import { Title } from '@components/UI/Title';
import { Subtitle } from '@components/UI/Subtitle';
import { Button } from '@components/UI/Button';
import { motion } from 'framer-motion';
import bgUrl from '@img/home/hero/bg.webp';
import bgUrl_1x from '@img/home/hero/bg_1.5x.webp';
import bgUrl_2x from '@img/home/hero/bg_2x.webp';
import bgUrl_3x from '@img/home/hero/bg_3x.webp';
import './_hero.scss';

const scrollToAbout = () => {
   const headerOffSet = 80;
   const target = document.getElementById('about') as HTMLElement;
   if (!target) return;

   const start = window.scrollY;
   const end = target.getBoundingClientRect().top + window.scrollY - headerOffSet;
   const duration = 700;
   const startTime = performance.now();

   const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
   const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(animate);
   };

   requestAnimationFrame(animate);
};

export const Hero = () => {
   return (
      <section className="hero">
         <motion.picture
            className="hero__bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
         >
            <source srcSet={`${bgUrl_3x} 3x, ${bgUrl_2x} 2x, ${bgUrl_1x} 1.5x`} type="image/webp" />
            <img src={bgUrl} alt="" loading="lazy" />
         </motion.picture>
         <div className="hero__container">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            >
               <Title tag="h1" color="white" withDecor>
                  Everything You Love About Coffee
               </Title>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
            >
               <Subtitle color="white" tag="p" noSpacing>
                  We makes every day full of energy and taste
               </Subtitle>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            >
               <Subtitle color="gray" tag="p">
                  Want to try our beans?
               </Subtitle>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
            >
               <Button
                  variant="primary"
                  onClick={scrollToAbout}
                  as="button"
                  type="button"
                  aria-label="Scroll to About section"
               >
                  More
               </Button>
            </motion.div>
         </div>
      </section>
   );
};
