import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '../router';

function App() {
   return (
      // Use Vite's BASE_URL so the router basename matches `base` in vite.config
      <BrowserRouter basename={import.meta.env.BASE_URL}>
         <div className="app">
            <AppRouter />
         </div>
      </BrowserRouter>
   );
}

export default App;
