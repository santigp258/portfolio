import { LisItemsI } from '../listitem';

export const Menu: React.FC<LisItemsI> = ({ title, href, classNames = '' }) => {
  return (
    <a
      href={`#${href}`}
      className={`text-teal-200 capitalize last:text-primary  hover:text-hoverlinks ${classNames}`}
    >
      {title}
    </a>
  );
};
