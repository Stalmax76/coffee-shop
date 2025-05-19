import clsx from 'clsx';
import './_styles-ui-component.scss';

type SearchInputProps = {
  id: string;
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textPlaceholder?: string;
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  id,
  value,
  textPlaceholder = 'start typing here...',
  onChange,
  label = 'Lookiing for',
  className = '',
}) => {
  return (
    <div className={clsx(`searchInput ${className}`)}>
      {label && (
        <label htmlFor={id} className='searchInput__label'>
          {label}
        </label>
      )}
      <input
        type='text'
        id={id}
        value={value}
        onChange={onChange}
        placeholder={textPlaceholder}
        className='searchInput__input'
      />
    </div>
  );
};
export default SearchInput;
