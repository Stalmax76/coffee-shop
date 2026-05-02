import clsx from 'clsx';
import { TitleDecor } from '@components/UI/TitleDecor';
import './_title.scss';

type TitleProps = {
	children: React.ReactNode;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: 'white' | 'black';
	withDecor?: boolean;
	className?: string;
};

export const Title = ({
	children,
	tag: Tag = 'h2',
	color = 'black',

	withDecor = false,
	className = '',
}: TitleProps) => {
	return (
		<>
			<Tag
				className={clsx(
					'title',
					`title--${color}`,

					withDecor && 'title--with-decor',
					className
				)}>
				{children}
			</Tag>
			{withDecor && <TitleDecor color={color} />}
		</>
	);
};
