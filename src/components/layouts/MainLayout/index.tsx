import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className='wrapper'>
			<div className='wrapper__container'>
				<h1 style={{ color: 'red' }}>MainLayout</h1>
			</div>

			{/* <Header />
      <main>
        <Outlet />
      </main>
      <Footer /> */}
		</div>
	);
};

export default MainLayout;
