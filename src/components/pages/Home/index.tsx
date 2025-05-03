import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home-page'>
      <Outlet />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </section>
  );
};

export default Home;
