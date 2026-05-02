import { Title } from '@components/UI/Title';
import { PromoCard } from '@components/PromoCard';
import imgUrl_1 from '@img/home/promo/01.webp';

import imgUrl_2 from '@img/home/promo/02.webp';
import imgUrl_3 from '@img/home/promo/03.webp';
import './_best.scss';
export const Best = () => {
	return (
		<section className='best'>
			<div className='best__container'>
				<div className='best__header'>
					<Title tag='h2' color='black'>
						Our best
					</Title>
				</div>

				<div className='best__cards'>
					<PromoCard
						image={imgUrl_1}
						title='Solimo Coffee Beans 2 kg'
						price={10.73}
						href='#'
					/>
					<PromoCard
						image={imgUrl_2}
						title='Solimo Coffee Beans 2 kg'
						price={10.73}
						href='#'
					/>
					<PromoCard
						image={imgUrl_3}
						title='Solimo Coffee Beans 2 kg'
						price={10.73}
						href='#'
					/>
				</div>
			</div>
		</section>
	);
};
