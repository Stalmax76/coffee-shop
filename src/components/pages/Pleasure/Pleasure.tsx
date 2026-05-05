import { HeaderPage } from '@components/layouts/HeaderPage';
import headerBg from '@img/pleasure/bg .webp?url';
import { PageDescription } from '@components/content/PageDescription';
import img from '@img/pleasure/cup.webp?url';
import { OurCoffeeSection } from '@components/content/OurCoffeeSection';
import productsRaw from '@data/listPleasure.json';

const textParagraphs = [
   'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
   'Afraid at highly months do things on at. Situation recommend objection do intentionso questions. ',
   'As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
];

const products = productsRaw.map((p) => ({
   ...p,
   image: img,
}));

export const Pleasure = () => {
   return (
      <section className="pleasure">
         <HeaderPage title="For your pleasure" background={headerBg} />
         <PageDescription
            text={textParagraphs}
            title="About our beans"
            decor
            image={img}
            alt="image the cup of coffee"
         />
         <OurCoffeeSection products={products} parentPath="pleasure" />
      </section>
   );
};
