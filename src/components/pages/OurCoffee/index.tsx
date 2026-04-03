import CoffeeListSection from '@components/CoffeeListSection.tsx';
import HeaderPage from '@components/common/HeaderPage';
import PageDescription from '@components/common/PageDescription';

const OurCoffee = () => {
  return (
    <section className='our-product-page'>
      <HeaderPage />
      <PageDescription />
      <CoffeeListSection />
    </section>
  );
};

export default OurCoffee;
