import Typed from 'react-typed';

export const Hero: React.FC = () => {
  return (
    <section className="px-6 md:w-9/12 md:m-auto md:px-0">
      <div>
        <h3 className="text-2xl">
          <Typed strings={['Hola, soy']} typeSpeed={50} showCursor={false} />
        </h3>
        <h1 className="text-4xl text-primary font-bold">
          <Typed strings={['Santiago']} typeSpeed={150} showCursor={false} />
        </h1>
        <h3 className="text-2xl font-semibold mb-2">
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
        <p className="text-justify">
          Soy desarrollador
          <span className="font-semibold"> Front End</span>, vivo en Colombia. Entusiasta
          del mundo del software con un gran enfoque en el desarrollo web. Siempre
          encontrando la mejor forma de hacer las cosas, aprendiendo cada día y dando lo
          mejor de mí en cada proyecto.
        </p>
        <button
          className="btn btn-blue m-auto block w-full my-3 uppercase shadow"
          type="button"
        >
          <a href="#contact" className="font-semibold">
            Contáctame
          </a>
        </button>
        <button className="btn m-auto block w-full my-3 uppercase" type="button">
          <a href="#works" className="font-semibold">
            Mis trabajos
          </a>
        </button>
      </div>
      <div className="hidden md:block">
        <h2 className="">Developer</h2>
        <img src="./img/hero.png" alt="developer" />
      </div>
    </section>
  );
};
