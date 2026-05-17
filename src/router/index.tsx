import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Preloader } from '@components/UI/Preloader';
import MainLayout from '@components/layouts/MainLayout';
import ScrollToTop from '@components/content/ScrollToTop';

// Lazy-loaded pages
const Home = lazy(() => import('@components/pages/Home'));
const OurCoffee = lazy(() => import('@components/pages/OurCoffee'));
const Pleasure = lazy(() => import('@components/pages/Pleasure'));
const NotFound = lazy(() => import('@components/pages/NotFound'));

export const AppRouter = () => {
   return (
      <Suspense fallback={<Preloader />}>
         <ScrollToTop />
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<Home />} />
               <Route path="our-coffee" element={<OurCoffee />} />
               <Route path="our-coffee/:id" element={<OurCoffee />} />
               <Route path="pleasure">
                  <Route index element={<Pleasure />} />
                  <Route path=":id" element={<Pleasure />} />
               </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Suspense>
   );
};
