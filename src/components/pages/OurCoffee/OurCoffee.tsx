// import CoffeeListSection from '@components/CoffeeListSection.tsx';
import img from '@img/ourCoffe/girl.jpg?url';
import { HeaderPage } from '@components/layouts/HeaderPage';
import { PageDescription } from '@components/content/PageDescription';

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
         {/* <ArticleBlock title="About our beans" decor paragraphs={textParagraphs} /> */}

         {/* <PageDescription />
      <CoffeeListSection /> */}
      </section>
   );
};
