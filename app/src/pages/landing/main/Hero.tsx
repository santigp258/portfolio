import Typed from 'react-typed';

export const Hero: React.FC = () => {
  return (
    <section className="hero__container">
      <div className="hero__content-left">
        <h3>
          <Typed strings={['Hola, soy']} typeSpeed={50} showCursor={false} />
        </h3>
        <h1>
          <Typed strings={['Santiago']} typeSpeed={150} showCursor={false} />
        </h1>
        <h3>
          <Typed
            strings={[
              'Me gusta programar',
              'Entusiasta del desarrollo web',
              'Siempre aprendiendo'
            ]}
            typeSpeed={100}
            loop
          />
        </h3>
        <p>
          Soy desarrollador
          <span style={{ fontWeight: 'bold' }}> Front End</span>, vivo en Colombia.
          Entusiasta del mundo del software con un gran enfoque en el desarrollo web.
          Siempre encontrando la mejor forma de hacer las cosas, aprendiendo cada día y
          dando lo mejor de mí en cada proyecto.
        </p>
        <a href="#contact">
          <button className="portfolio_button hero__button-talk" type="button">
            Contáctame
          </button>
        </a>
        <a href="#works">
          <button className="portfolio_button hero__button-works" type="button">
            Mis trabajos
          </button>
        </a>
      </div>
      <div className="hero__content-right">
        <h2 className="hero__text">Developer</h2>
        <img src="./img/hero.png" className="hero__img" alt="developer" />
      </div>
    </section>
  );
};
