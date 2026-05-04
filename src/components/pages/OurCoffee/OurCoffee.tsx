import img from '@img/ourCoffee/girl.jpg?url';
import imgCard from '@img/ourCoffee/product.webp?url';
import { HeaderPage } from '@components/layouts/HeaderPage';
import { PageDescription } from '@components/content/PageDescription';
import { OurCoffeeSection } from '@components/content/OurCoffeeSection';
import productsRaw from '@data/listCards.json';

const products = productsRaw.map((p) => ({
   ...p,
   image: imgCard,
}));

const textParagraphs = [
   'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
   'Afraid at highly months do things on at. Situation recommend objection do intentionso questions. ',
   'As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
];

export const OurCoffee = () => {
   return (
      <section className="ourCoffee">
         <HeaderPage title="Our Coffee" />
         <PageDescription
            text={textParagraphs}
            title="About our beans"
            decor
            image={img}
            alt="image alt"
         />
         <OurCoffeeSection products={products} />
         {/* <SearchInput id="serch" value="" onChange={() => {}} />
         <Tabs
            label="Or filter"
            items={['brazil', 'kenya', 'columbia']}
            active={active}
            onChange={(val) => setActive(val)}
         />
         <ProductCard title="Single origin" country="Brazil" price={9.99} image={imgCard} /> */}
      </section>
   );
};
