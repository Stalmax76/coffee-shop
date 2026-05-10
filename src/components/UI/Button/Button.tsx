import clsx from 'clsx';
import './_button.scss';

{
   /* <Button variant='primary'>
	<IconCoffee />
	Buy Coffee
</Button>; */
}
type ButtonAsButton = {
   as?: 'button';
   type?: 'button' | 'submit' | 'reset';
   onClick?: () => void;
   disabled?: boolean;
   href?: never;
};
type ButtonAsLink = {
   as: 'a';
   href: string;
   onClick?: never;
   disabled?: never;
   type?: never;
};

type CommonProps = {
   children: React.ReactNode;
   variant?: 'primary' | 'black' | 'white';
   className?: string;
};

type ButtonProps = CommonProps & (ButtonAsButton | ButtonAsLink);
export const Button = ({
   children,
   variant = 'primary',
   as: Tag = 'button',
   className,
   ...props
}: ButtonProps) => {
   return (
      <Tag {...props} className={clsx('btn', `btn--${variant}`, className)}>
         {children}
      </Tag>
   );
};
