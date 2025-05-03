import MainLayout from '@components/layouts/MainLayout';
import Home from '@components/pages/Home';
import NotFound from '@components/pages/NotFaund';
import OurCoffee from '@components/pages/OurCoffee';
import Pleasur from '@components/pages/Pleasur';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
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
