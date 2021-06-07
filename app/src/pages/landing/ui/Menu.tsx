import { LisItemsI } from '../listitem';

export const Menu: React.FC<LisItemsI> = ({ title, href, color = '' }) => {
  return (
    <a
      href={`#${href}`}
      className={`block mt-4 mr-5 md:inline-block md:mt-0 text-teal-200 hover:text-white capitalize ${color}`}
    >
      {title}
    </a>
  );
};
