import { useState, useMemo } from 'react';
import { SearchInput } from '@components/UI/SearchInput';
import { Tabs } from '@components/UI/Tabs';
import { ProductCard } from '@components/content/ProductCard';
import './_ourCoffeeSection.scss';

type Product = {
   id: number;
   title: string;
   country: string;
   price: number;
   image: string;
};

type Props = {
   products: Product[];
};

export const OurCoffeeSection: React.FC<Props> = ({ products }) => {
   const [search, setSearch] = useState('');
   const [activeTab, setActiveTab] = useState('');

   const filtered = useMemo(() => {
      return products
         .filter((p) => (activeTab ? p.country.toLowerCase() === activeTab : true))
         .filter((p) => (search ? p.title.toLowerCase().includes(search.toLowerCase()) : true));
   }, [products, search, activeTab]);

   return (
      <section className="our-coffee">
         <div className="our-coffee__container">
            <div className="our-coffee__filters">
               <SearchInput
                  id="search"
                  label="Looking for"
                  value={search}
                  onChange={setSearch}
                  placeholder="start typing here..."
               />

               <Tabs
                  label="Or filter"
                  items={['brazil', 'kenya', 'columbia']}
                  active={activeTab}
                  onChange={setActiveTab}
               />
            </div>

            <div className="our-coffee__grid">
               {filtered.map((item) => (
                  <ProductCard
                     key={item.id}
                     title={item.title}
                     country={item.country}
                     price={item.price}
                     image={item.image}
                     link={`/products/${item.id}`}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};
