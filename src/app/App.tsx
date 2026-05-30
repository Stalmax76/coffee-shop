// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { AppRouter } from '../router';

function App() {
   return (
      // Use Vite's BASE_URL so the router basename matches `base` in vite.config
      <HashRouter>
         <div className="app">
            <AppRouter />
         </div>
      </HashRouter>
   );
}

export default App;
