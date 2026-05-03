import SearchInput from '@components/UI/SearchInput';
import SortControls from '@components/UI/SortControls';
import { useState } from 'react';
import './_coffeeListSection.scss';

import type { ProductCardProps } from '@components/common/ProductCard';

import ProductCard from '@components/common/ProductCard';
import listCards from '@data/listCards.json';
const cards = listCards as ProductCardProps[];

const sortTabs = ['Brazil', 'Kenya', 'Columbia'];

const CoffeeListSection = () => {
   const [searchValue, setSearchValue] = useState('');
   const [activeIndex, setActiveIndex] = useState(0);

   const countries: string[] = [
      ...Array.from(new Set(cards.map((item: ProductCardProps): string => item.country || ''))),
   ];

   console.log(countries);
   return (
      <section className="coffeeListSection">
         <div className="coffeeListSection__container">
            <div className="coffeeListSection__controls">
               <SearchInput
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  id="search"
               />
               <SortControls
                  listTabs={sortTabs}
                  activeIndex={activeIndex}
                  onTabClick={setActiveIndex}
               />
            </div>
            {/* <h2>Cofee List! (searchValue) and originFilter(sortTabs(activeIndex))</h2> */}
            <div className="coffeeListSection__listItems">
               {cards.map((item: ProductCardProps) => (
                  <ProductCard key={item.title} {...item} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default CoffeeListSection;
