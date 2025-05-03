import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
