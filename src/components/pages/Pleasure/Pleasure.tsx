import { useParams } from 'react-router-dom';
import { HeaderPage } from '@components/layouts/HeaderPage';
import { PageDescription } from '@components/content/PageDescription';
import { OurCoffeeSection } from '@components/content/OurCoffeeSection';
import { ProductDetails } from '@components/content/ProductDetails';
import img from '@img/pleasure/cup.webp?url';
import headerBg from '@img/pleasure/bg .webp?url';
import type { Product } from '@typesLocal/product';

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
   const params = useParams();
   const id = params.id;

   const product: Product | undefined =
      id !== undefined ? products.find((p) => p.id === Number(id)) : undefined;

   return (
      <section className="pleasure" aria-labelledby="pleasure-page">
         <HeaderPage title="For your pleasure" background={headerBg} />

         {!id && (
            <>
               <PageDescription
                  text={textParagraphs}
                  title="About our beans"
                  decor
                  image={img}
                  alt="Cup of coffee on the table"
               />

               <OurCoffeeSection products={products} parentPath="/pleasure" />
            </>
         )}

         {id && product && <ProductDetails product={product} />}

         {id && !product && <h2 aria-live="polite">Product not found</h2>}
      </section>
   );
};
