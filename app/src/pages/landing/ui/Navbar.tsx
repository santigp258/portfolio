import { useRef } from 'react';
import { listItems } from '../listitem';
import { Menu } from './Menu';
//import { Menu } from './Menu';

export const Navbar: React.FC = () => {
  const refMenu = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    if (refMenu.current) {
      refMenu.current.classList.toggle('hidden');
    }
  };
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 md:w-9/12 md:m-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">{'<Santiago />'}</span>
        </div>
        <div className="block md:hidden">
          <button
            id="boton"
            onClick={handleToggle}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
          className="w-full block flex-grow md:flex md:items-center md:w-auto"
        >
          <div className="text-base md:flex md:justify-end w-full">
            {listItems.map(item => (
              <Menu {...item} key={item.href}/>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
