import { Image } from './Image';
import { useWorks } from '../../../hooks/useWorks';
import { Category } from './Category';

export const Works: React.FC = () => {
  const { works, changeImage, handleSubstract, handleAdd, img } = useWorks();
  const { categories, title, desc, images, repo, web } = works;
  const url = images[img];
  return (
    <section id="works" className="container py-7">
      <h4 className="text-3xl md:text-5xl mb-2 font-semibold text-primary">
        Mis trabajos
      </h4>
      <h4 className="text-3xl md:text-5xl mb-5 font-semibold">
        Proyectos en los que he participado
      </h4>
      <div>
        <div className="overflow-hidden rounded-lg shadow-xl mb-8 md:w-3/6 md:m-auto">
          <Image url={url} changeImage={changeImage} />
        </div>
        <div className="md:flex justify-between mt-10">
          <div className="md:w-custom">
            <h5 className="text-primary font-semibold text-2xl md:text-4xl mb-3">
              {title}
            </h5>
            <p className="text-lg">{desc}</p>
            <div className="flex flex-wrap justify-between mt-3">
              {categories.map(({ ...cat }) => (
                <Category {...cat} key={cat._id} />
              ))}
            </div>
          </div>
          <div className="mt-8 md:w-4/12">
            <h5 className="text-lg uppercase text-hoverlinks font-semibold md:text-2xl md:mb-4">
              Ver Proyecto
            </h5>
            <div className="flex justify-around w-full md:justify-between md:text-xl">
              <a
                href={web}
                className="underline hover:text-primary md:w-4/12"
                target="_blank"
                rel="noreferrer noopener"
              >
                Web
              </a>
              <a
                href={repo}
                className="underline hover:text-primary md:w-4/12"
                target="_blank"
                rel="noreferrer noopener"
              >
                Código
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="btn bg-primary mr-2 shadow-md hover:bg-black w-16"
            onClick={handleSubstract}
          >
            <i className="fas fa-chevron-left text-white text-xl font-bold" />
          </button>
          <button
            className="btn bg-primary shadow-md hover:bg-black w-16"
            onClick={handleAdd}
          >
            <i className="fas fa-chevron-right text-white text-xl font-bold" />
          </button>
        </div>
      </div>
    </section>
  );
};
