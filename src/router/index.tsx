import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Preloader } from '@components/UI/Preloader';
import MainLayout from '@components/layouts/MainLayout';

// Lazy-loaded pages
const Home = lazy(() => import('@components/pages/Home'));
const OurCoffee = lazy(() => import('@components/pages/OurCoffee'));
// const Pleasure = lazy(() => import('@components/pages/Pleasure'));
// const NotFound = lazy(() => import('@components/pages/NotFound'));

export const AppRouter = () => {
   return (
      <Suspense fallback={<Preloader />}>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<Home />} />
               <Route path="our-coffee" element={<OurCoffee />} />
               {/* <Route path="pleasure" element={<Pleasure />} />
               <Route path="*" element={<NotFound />} /> */}
            </Route>
         </Routes>
      </Suspense>
   );
};
