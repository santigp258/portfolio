import Typed from 'react-typed';

export const Hero: React.FC = () => {
  return (
    <section className="md:flex container">
      <div className="md:w-7/12 md:pr-24">
        <h3 className="text-2xl md:text-4xl mb-2">
          <Typed strings={['Hola, soy']} typeSpeed={50} showCursor={false} />
        </h3>
        <h1 className="text-4xl md:text-6xl text-primary font-bold mb-2">
          <Typed strings={['Santiago']} typeSpeed={150} showCursor={false} />
        </h1>
        <h3 className="text-2xl md:text-4xl font-semibold mb-3">
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
        <p className="text-justify md:text-lg">
          Soy desarrollador
          <span className="font-semibold"> Front End</span>, vivo en Colombia. Entusiasta
          del mundo del software con un gran enfoque en el desarrollo web. Siempre
          encontrando la mejor forma de hacer las cosas, aprendiendo cada día y dando lo
          mejor de mí en cada proyecto.
        </p>
        <button
          className="btn-red m-auto block w-full my-3 uppercase shadow md:inline-block md:w-3/6 hover:bg-primary hover:shadow-sm"
          type="button"
        >
          <a href="#contact" className="btn font-semibold block">
            Contáctame
          </a>
        </button>
        <button
          className="m-auto block w-full my-3 uppercase md:inline-block md:w-3/6 hover:text-primary"
          type="button"
        >
          <a href="#works" className="btn font-semibold block">
            Mis trabajos
          </a>
        </button>
      </div>
      <div
        className="hidden md:block overflow-hidden relative bg-primary md:flex-1 md:w-5/12"
        style={{ height: 500 }}
      >
        <h2
          className="absolute text-white uppercase font-semibold text-6xl right-0 top-5 tracking-wider"
          style={{ maxWidth: '100%' }}
        >
          Developer
        </h2>
        <img
          src="./img/hero.png"
          alt="developer"
          className="absolute top-0 h-full right-0 w-7/12"
        />
      </div>
    </section>
  );
};
