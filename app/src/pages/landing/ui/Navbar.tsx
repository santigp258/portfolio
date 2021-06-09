import { useRef } from 'react';
import { listItems } from '../listitem';
import { Menu } from './Menu';
//import { Menu } from './Menu';

export const Navbar: React.FC = () => {
  const refMenu = useRef<HTMLDivElement>(null);
  const handleToggle = () =>
    refMenu.current && refMenu.current.classList.toggle('hidden');

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-6 container">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight text-primary cursor-pointer hover:text-black">
            {'<Santiago />'}
          </span>
        </div>
        <div className="block md:hidden">
          <button
            id="boton"
            onClick={handleToggle}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          ref={refMenu}
          id="menu"
          className="w-full flex-grow md:flex md:items-center md:w-auto hidden"
        >
          <div className="text-base md:flex md:justify-end w-full">
            {listItems.map(item => (
              <Menu
                {...item}
                key={item.href}
                classNames="block mt-4 mr-5 md:inline-block md:mt-0 md:mr-8"
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
