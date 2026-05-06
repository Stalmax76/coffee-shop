import { useParams } from 'react-router-dom';
import { HeaderPage } from '@components/layouts/HeaderPage';
import { PageDescription } from '@components/content/PageDescription';
import { OurCoffeeSection } from '@components/content/OurCoffeeSection';
import { ProductDetails } from '@components/content/ProductDetails';
import img from '@img/ourCoffee/girl.jpg?url';
import imgCard from '@img/ourCoffee/product.webp?url';
import type { Product } from '@typesLocal/product';

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
   const params = useParams();
   const id = params.id;

   const product: Product | undefined =
      id !== undefined ? products.find((p) => p.id === Number(id)) : undefined;

   let content;

   if (!id) {
      content = (
         <>
            <PageDescription
               text={textParagraphs}
               title="About our beans"
               decor
               image={img}
               alt="image alt"
            />
            <OurCoffeeSection products={products} parentPath="our-coffee" />
         </>
      );
   } else if (product) {
      content = <ProductDetails product={product} />;
   } else {
      content = <h1>Product not found</h1>;
   }
   return (
      <section className="ourCoffee">
         <HeaderPage title="Our Coffee" />
         {content}
      </section>
   );
};
