import { Footer } from '@components/layouts/Footer';
import { Header } from '@components/layouts/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
   return (
      <div className="wrapper">
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
};

export default MainLayout;
