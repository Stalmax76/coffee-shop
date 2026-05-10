import { Title } from '@components/UI/Title';
import { PromoCard } from '@components/content/PromoCard';
import { motion } from 'framer-motion';
import imgUrl_1 from '@img/home/promo/01.webp';

import imgUrl_2 from '@img/home/promo/02.webp';
import imgUrl_3 from '@img/home/promo/03.webp';
import './_best.scss';
export const Best = () => {
   return (
      <section className="best">
         <div className="best__container">
            <motion.div
               className="best__header"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
            >
               <Title tag="h2" color="black">
                  Our best
               </Title>
            </motion.div>

            <motion.div
               className="best__cards"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: 0.15 * 0.6,
               }}
            >
               <PromoCard
                  image={imgUrl_1}
                  title="Solimo Coffee Beans 2 kg"
                  price={10.73}
                  href="#"
               />
               <PromoCard
                  image={imgUrl_2}
                  title="Solimo Coffee Beans 2 kg"
                  price={10.73}
                  href="#"
               />
               <PromoCard
                  image={imgUrl_3}
                  title="Solimo Coffee Beans 2 kg"
                  price={10.73}
                  href="#"
               />
            </motion.div>
         </div>
      </section>
   );
};
