import { Outlet } from 'react-router-dom';

const OurCoffee = () => {
  return (
    <section className='our-product-page'>
      <Outlet />
      <h1>Our Product</h1>
      <p>Details about our product will go here.</p>
    </section>
  );
};

export default OurCoffee;
