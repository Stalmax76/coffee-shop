import Tab from '@components/UI/Tab';

import './_styles-ui-component.scss';

type TabsProps = {
   listTabs: string[];
   activeIndex: number;
   onTabClick: (index: number) => void;
};
const SortControls: React.FC<TabsProps> = ({ listTabs, activeIndex, onTabClick }: TabsProps) => {
   return (
      <div className="sortControls">
         <div className="sortControls__container">
            <label htmlFor="" className="sortControls__label">
               Or filter
            </label>
            <div className="sortControls__controls">
               {listTabs.map((label, index) => (
                  <Tab
                     key={label}
                     label={label}
                     isActive={index === activeIndex}
                     onClick={() => onTabClick(index)}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default SortControls;
