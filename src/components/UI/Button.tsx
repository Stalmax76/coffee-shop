import './_styles-ui-component.scss';
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className='btn'>
      {label}
    </button>
  );
};

export default Button;
