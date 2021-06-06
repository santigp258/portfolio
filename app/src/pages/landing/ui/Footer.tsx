import { Menu } from './Menu';

export const Footer: React.FC = () => {
  return (
    <footer className="footer__main">
      <div className="footer__container">
        <div className="footer__left">
          <h5>Santiago</h5>
          <p>
            &copy; 2021 <span>¡El reto es no rendirse!</span>
          </p>
        </div>
        <div className="footer__center">
          <h5>Contacto</h5>
          <ul className="footer_list_contact">
            <li>santigp258@gmail.com</li>
            <li>
              <img
                src="./img/colombia.svg"
                alt="colombia flag"
                className="footer__flag"
              />
              +57 3184241938
            </li>
          </ul>

          <h5>¡Seamos amigos!</h5>
          <ul className="footer__social">
            <li>
              <a
                href="https://www.facebook.com/blabla258/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/santigp258"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/santiago_g258/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/santiago-guerrero-pulgarin-649282207/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="mr-20">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=573184241938&text=Hola.%20%C2%BFC%C3%B3mo%20est%C3%A1s?"
                className="text-white hover:text-black"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__right">
          <h5>Menu</h5>
          <ul>
            <Menu />
          </ul>
        </div>
      </div>
    </footer>
  );
};
