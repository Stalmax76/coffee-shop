import MainLayout from '@components/layouts/MainLayout';
import Home from '@components/pages/Home';
import NotFound from '@components/pages/NotFound';
import OurCoffee from '@components/pages/OurCoffee';
import Pleasur from '@components/pages/Pleasur';
import Preloader from '@components/UI/Preloader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hidePreloader = () => {
      const staticNode = document.getElementById('preloader');
      if (staticNode) {
        staticNode.classList.add('preloader--hidden');
      }
      window.setTimeout(() => setShowPreloader(false), 250);
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }

    return () => {
      window.removeEventListener('load', hidePreloader);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        {showPreloader && <Preloader />}
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='ourCoffee' element={<OurCoffee />} />
            <Route path='pleasure' element={<Pleasur />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
