import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '../router';

function App() {
   return (
      <BrowserRouter>
         <div className="app">
            <AppRouter />
         </div>
      </BrowserRouter>
   );
}

export default App;
