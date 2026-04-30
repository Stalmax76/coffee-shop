import { NavLink } from 'react-router-dom';
import './_desktopNav.scss';

export const DesktopNav = () => {
	return (
		<nav className='desktop-nav'>
			<ul className='desktop-nav__list'>
				<li className='desktop-nav__item'>
					<NavLink end to='.'>
						Coffee house
					</NavLink>
				</li>
				<li className='desktop-nav__item'>
					<NavLink to='OurCoffee'>Our coffee</NavLink>
				</li>
				<li className='desktop-nav__item'>
					<NavLink to='Pleasure'>For your pleasure</NavLink>
				</li>
			</ul>
		</nav>
	);
};
