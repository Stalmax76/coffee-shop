import clsx from 'clsx';
import './_title.scss';

type TitleProps = {
	children: React.ReactNode;
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: 'white' | 'black';
	size: 'small' | 'medium' | 'large';
	withDecor?: boolean;
	className?: string;
};

const Title = ({
	children,
	tag: Tag = 'h2',
	color = 'black',
	size,
	withDecor = false,
	className = '',
}: TitleProps) => {
	return (
		<>
			<Tag
				className={clsx(
					'title',
					`title--${color}`,
					`title--${size}`,
					withDecor && 'title--with-decor',
					className
				)}>
				{children}
			</Tag>
			{withDecor && <div className={clsx('title__decor', `title__decor--${color}`)} />}
		</>
	);
};

export default Title;
