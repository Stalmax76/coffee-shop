import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import '@scss/_main.scss';

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);
