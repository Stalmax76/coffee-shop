import clsx from 'clsx';
import './_searchInput.scss';

type SearchInputProps = {
   id: string;
   value: string;
   label?: string;
   onChange: (value: string) => void;
   placeholder?: string;
   className?: string;
};

export const SearchInput: React.FC<SearchInputProps> = ({
   id,
   value,
   label = 'Lookiing for',
   placeholder = 'start typing here...',
   onChange,
   className,
}) => {
   return (
      <div className={clsx('search-input', className)}>
         {label && (
            <label htmlFor={id} className="search-input__label">
               {label}
            </label>
         )}
         <div className="search-input__field">
            <input
               type="text"
               id={id}
               value={value}
               onChange={(e) => onChange(e.target.value)}
               placeholder={placeholder}
               className="search-input__input"
            />
         </div>
      </div>
   );
};
