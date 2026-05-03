import { Outlet } from 'react-router-dom';

const Pleasure = () => {
   return (
      <section className="pleasure">
         <Outlet />
         <h1>Pleasur</h1>
         <p>Welcome to the Pleasur page!</p>
      </section>
   );
};

export default Pleasure;
