import { useState, useMemo } from 'react';
import { SearchInput } from '@components/UI/SearchInput';
import { Tabs } from '@components/UI/Tabs';
import { ProductCard } from '@components/content/ProductCard';
import type { Product } from '@typesLocal/product';
import { motion, AnimatePresence } from 'framer-motion';
import './_ourCoffeeSection.scss';

type Props = {
   products: Product[];
   parentPath?: string;
};
const searchebleFields: (keyof Product)[] = ['title', 'country', 'price', 'description'];
export const OurCoffeeSection: React.FC<Props> = ({ products, parentPath = '' }) => {
   const [search, setSearch] = useState('');
   const [activeTab, setActiveTab] = useState('');

   const filtered = useMemo(() => {
      const s = search.toLowerCase();

      return products
         .filter((p) => (activeTab ? p.country.toLowerCase() === activeTab : true))
         .filter((p) => {
            return !search
               ? true
               : searchebleFields.some((field) => {
                    const value = p[field];
                    if (!value) return false;

                    const normalized = Array.isArray(value)
                       ? value.join(' ').toLowerCase()
                       : String(value).toLowerCase();

                    return normalized.includes(s);
                 });
         });
   }, [products, search, activeTab]);

   const handleTabChange = (tab: string) => {
      if (tab === activeTab) {
         setActiveTab('');
         setSearch('');
      } else {
         setActiveTab(tab);
         setSearch('');
      }
   };

   return (
      <section className="our-coffee" aria-label="Coffee products section">
         <div className="our-coffee__container">
            <div className="our-coffee__filters" role="search">
               <SearchInput
                  id="search"
                  label="Looking for"
                  value={search}
                  onChange={setSearch}
                  placeholder="start typing here..."
                  aria-label="Search input"
               />

               <Tabs
                  label="Or filter"
                  items={['brazil', 'kenya', 'columbia']}
                  active={activeTab}
                  onChange={handleTabChange}
                  aria-label="Filter products by country"
               />
            </div>

            <div className="our-coffee__grid">
               <AnimatePresence>
                  {filtered.map((item) => (
                     <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                     >
                        <ProductCard
                           key={item.id}
                           title={item.title}
                           country={item.country}
                           price={item.price}
                           image={item.image}
                           link={`/${parentPath}/${item.id}`}
                        />
                     </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </div>
      </section>
   );
};
