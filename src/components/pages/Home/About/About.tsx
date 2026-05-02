import { Title } from '@components/UI/Title';
import './_about.scss';

export const About = () => {
	return (
		<section className='about'>
			<div className='about__container'>
				<div className='about__header'>
					<Title withDecor tag='h2' color='black'>
						About Us
					</Title>
				</div>
				<div className='about__content'>
					<div className='about__text text'>
						<p>
							Extremity sweetness difficult behaviour he of. On disposal of as landlord
							horrible. Afraid at highly months do things on at. Situation recommend
							objection do intention so questions. As greatly removed calling pleased improve
							an. Last ask him cold feel met spot shy want. Children me laughing we prospect
							answered followed. At it went s song that held help face.
						</p>
						<p>
							Now residence dashwoods she excellent you. Shade being under his bed her, Much
							read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
							horrible but confined day end marriage. Eagerness furniture set preserved far
							recommend. Did even but nor are most gave hope. Secure active living depend son
							repair day ladies now.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
