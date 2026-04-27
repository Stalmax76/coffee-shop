import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Preloader from '@components/UI/Preloader';
import { AppRouter } from './roter';

function App() {
	const [showPreloader, setShowPreloader] = useState(true);

	useEffect(() => {
		const hidePreloader = () => {
			const staticNode = document.getElementById('preloader');
			if (staticNode) {
				staticNode.classList.add('preloader--hidden');
			}
			setTimeout(() => setShowPreloader(false), 250);
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
				<AppRouter />
			</div>
		</BrowserRouter>
	);
}

export default App;
