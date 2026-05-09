import { Title } from '@components/UI/Title';
import { Link } from 'react-router-dom';
import './_notFound.scss';

const NotFound = () => {
   return (
      <section className="not-found">
         <Title tag="h1">404</Title>
         <p>Page not found</p>
         <Link to="/">Go home</Link>
      </section>
   );
};

export default NotFound;
