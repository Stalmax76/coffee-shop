import clsx from 'clsx';
import './_button.scss';

{
   /* <Button variant='primary'>
	<IconCoffee />
	Buy Coffee
</Button>; */
}

type ButtonProps = {
   children: React.ReactNode;
   variant?: 'primary' | 'black' | 'white';
   as?: 'button' | 'a';
   href?: string;
   onClick?: () => void;
   className?: string;
   disabled?: boolean;
};

export const Button = ({
   children,
   variant = 'primary',
   as: Tag = 'button',
   href,
   onClick,
   disabled,
   className,
}: ButtonProps) => {
   return (
      <Tag
         href={Tag === 'a' ? href : undefined}
         onClick={Tag === 'button' ? onClick : undefined}
         disabled={Tag === 'button' ? disabled : undefined}
         className={clsx('btn', `btn--${variant}`, className)}
      >
         {children}
      </Tag>
   );
};
