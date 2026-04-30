import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import './_mobileNav.scss';
export const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const pages = [
		{ label: 'Coffee house', to: '.' },
		{ label: 'Our coffee', to: '/OurCoffee' },
		{ label: 'For your pleasure', to: '/Pleasure' },
	];

	const current = pages.find((p) => p.to === location.pathname)?.label || 'Menu';
	return (
		<nav className='mobile-nav'>
			<button
				className={`mobile-nav__trigger `}
				aria-expanded={isOpen}
				aria-label='Toggle navigation menu'
				onClick={() => setIsOpen((prev) => !prev)}>
				{current}
				<span className='mobile-nav__icon'>▼</span>
			</button>
			{isOpen && (
				<ul className='mobile-nav__dropdown'>
					{pages.map((p) => (
						<li key={p.to} className='mobile-nav__item'>
							<NavLink
								to={p.to}
								onClick={() => setIsOpen(false)}
								className='mobile-nav__link'>
								{p.label}
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};
