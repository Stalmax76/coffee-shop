import { About } from '@components/pages/Home/About';
import { Best } from '@components/pages/Home/Best';
import Hero from '@components/pages/Home/Hero';

export const Home = () => {
   return (
      <div className="home">
         <Hero />
         <About />
         <Best />
      </div>
   );
};
