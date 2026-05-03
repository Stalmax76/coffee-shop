import clsx from 'clsx';
interface TabProps {
   label: string;
   onClick: () => void;
   isActive: boolean;
   className?: string;
}

const Tab: React.FC<TabProps> = ({ label, onClick, isActive = false, className }) => {
   return (
      <button
         role="tab"
         aria-selected={isActive}
         onClick={onClick}
         className={clsx('tab', { 'tab--active': isActive }, className)}
      >
         {label}
      </button>
   );
};

export default Tab;
