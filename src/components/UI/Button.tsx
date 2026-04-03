import clsx from 'clsx';
import './_styles-ui-component.scss';
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'black' | 'white';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, variant }) => {
  return (
    <button onClick={onClick} className={clsx('btn', `btn--${variant}`, className || ``)}>
      {label}
    </button>
  );
};

export default Button;
