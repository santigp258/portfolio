import { useRef } from 'react';
import { Menu } from './Menu';

export const Navbar: React.FC = () => {
  const refCheck = useRef<HTMLInputElement>(null);
  const handleToggle = () => {
    if (refCheck.current) {
      refCheck.current.click();
    }
  };
  return (
    <nav className="navbar__container" id="home">
      <div className="navbar__main">
        <div className="navbar__content-left">
          <p>{'<Santiago />'}</p>
        </div>
        <div id="navbar__menuToggle" onBlur={handleToggle}>
          <input type="checkbox" ref={refCheck} />
          <span></span>
          <span></span>
          <span></span>

          <ul id="navbar__menu" onClick={handleToggle}>
            <Menu />
          </ul>
        </div>
      </div>
    </nav>
  );
};
