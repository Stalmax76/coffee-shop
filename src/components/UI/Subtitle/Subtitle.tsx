import clsx from 'clsx';
import './_subtitle.scss';

type SubtitleProps = {
   children: React.ReactNode;
   color?: 'gray' | 'white' | 'black';
   className?: string;
   tag?: 'p' | 'span' | 'h4';
   noSpacing?: boolean;
};

export const Subtitle = ({
   children,
   color = 'gray',
   tag: Tag = 'p',
   className = '',
   noSpacing = false,
}: SubtitleProps) => {
   return (
      <Tag
         className={clsx(
            'subtitle',
            noSpacing && 'subtitle--noSpacing',
            `subtitle--${color}`,
            className,
         )}
      >
         {children}
      </Tag>
   );
};
