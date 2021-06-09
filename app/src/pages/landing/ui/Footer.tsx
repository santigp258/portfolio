import { listItems } from '../listitem';
import { Menu } from './Menu';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container py-7 md:grid md:grid-cols-3">
        <div>
          <h5 className="text-xl md:text-3xl mb-4 text-primary hover:text-black font-semibold">
            Santiago
          </h5>
          <p>
            &copy; 2021 <span>¡El reto es no rendirse!</span>
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <h5 className="text-xl md:text-3xl mb-4 font-semibold">Contacto</h5>
          <ul className="footer_list_contact">
            <li>
              <a href="mailto:santigp258@gmail.com">
                <i className="far fa-envelope mr-2" />
                santigp258@gmail.com
              </a>
            </li>
            <li className="inline-block">
              <img
                src="./img/colombia.svg"
                alt="colombia flag"
                className="w-4 inline-block mr-2"
              />
              <span>+57 3184241938</span>
            </li>
          </ul>

          <h5 className="text-xl md:text-3xl mb-4 font-semibold mt-7">¡Seamos amigos!</h5>
          <ul className="flex justify-around md:justify-start">
            <li className="mr-5">
              <a
                href="https://www.facebook.com/blabla258/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="mr-5">
              <a
                href="https://github.com/santigp258"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="mr-5">
              <a
                href="https://www.instagram.com/santiago_g258/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="mr-5">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/santiago-guerrero-pulgarin-649282207/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=573184241938&text=Hola.%20%C2%BFC%C3%B3mo%20est%C3%A1s?"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xl md:text-3xl mb-4 font-semibold mt-7 md:mt-0">Menu</h5>
          <div className="flex flex-wrap justify-between md:flex-col">
            {listItems.map(item => (
              <Menu {...item} key={item.href} classNames="mb-2"/>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
