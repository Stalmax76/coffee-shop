import { Title } from '@components/UI/Title';
import { Subtitle } from '@components/UI/Subtitle';
// import Button from '@components/UI/Button';
import bgUrl from '@img/home/hero/bg.webp';
import bgUrl_1x from '@img/home/hero/bg_1.5x.webp';
import bgUrl_2x from '@img/home/hero/bg_2x.webp';
import bgUrl_3x from '@img/home/hero/bg_3x.webp';
import './_hero.scss';

export const Hero = () => {
	return (
		<section className='hero'>
			<picture className='hero__bg'>
				<source srcSet={`${bgUrl_3x} 3x, ${bgUrl_2x} 2x, ${bgUrl_1x} 1.5x`} type='image/webp' />
				<img src={bgUrl} alt='background' loading='lazy' />
			</picture>
			<div className='hero__container'>
				<Title tag='h1' color='white' withDecor>
					Everything You Love About Coffee
				</Title>
				<Subtitle color='white' tag='p' noSpacing>
					We makes every day full of energy and taste
				</Subtitle>
				<Subtitle>Want to try our beans?</Subtitle>

				{/* <Button label='More' onClick={() => {}} /> */}
			</div>
		</section>
	);
};
