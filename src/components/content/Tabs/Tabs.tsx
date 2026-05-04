import clsx from 'clsx';
import './_tabs.scss';

type TabsProps = {
   label?: string;
   items: string[];
   active: string;
   onChange: (value: string) => void;
   className?: string;
};

export const Tabs: React.FC<TabsProps> = ({
   label = 'Filter by',
   items,
   active,
   onChange,
   className,
}) => {
   return (
      <div className={clsx('tabs', className)}>
         {label && <span className="tabs__label">{label}</span>}

         <div className="tabs__list">
            {items.map((item) => (
               <button
                  key={item}
                  type="button"
                  className={clsx('tabs__button', active === item && 'tabs__button--active')}
                  onClick={() => onChange(item)}
               >
                  {item}
               </button>
            ))}
         </div>
      </div>
   );
};
