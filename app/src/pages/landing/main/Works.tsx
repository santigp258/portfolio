import { Image } from './Image';
import { useWorks } from '../../../hooks/useWorks';

export const Works: React.FC = () => {
  const { works, changeImage, handleSubstract, handleAdd, img } = useWorks();
  const { categories, title, desc, images, repo, web } = works;
  const url = images[img];
  return (
    <section id="works" className="works__container">
      <h4>Mis trabajos</h4>
      <h4 className="works__descrip">Proyectos en los que he participado</h4>
      <div className="works__content">
        <div className="works__container-image-left">
          <div className="works__image">
            <Image url={url} changeImage={changeImage} />
          </div>
        </div>
        <div className="works__content-right">
          <div className="works__content-header">
            <h5 className="animate__animated animate__bounce">{title}</h5>
            <p>{desc}</p>
            <div className="works__content-tag">
              {categories.map(({ title, link, src, _id }) =>
                link ? (
                  <p className="works__tag-item" key={_id}>
                    <a target="_blank" rel="noreferrer noopener" href={src}>
                      {title}
                    </a>
                  </p>
                ) : (
                  <p className="works__tag-item" key={_id}>
                    <span>{title}</span>
                  </p>
                )
              )}
            </div>
          </div>
          <div className="works__content-body">
            <h5>Ver Proyecto</h5>
            <div className="works__content-links">
              <a
                href={web}
                className="works_content-links-item"
                target="_blank"
                rel="noreferrer noopener"
              >
                Web
              </a>
              <a
                href={repo}
                className="works_content-links-item"
                target="_blank"
                rel="noreferrer noopener"
              >
                Código
              </a>
            </div>
          </div>
          <div className="works__content-footer">
            <button
              className="portfolio_button works_button-arrow-left"
              onClick={handleSubstract}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="portfolio_button works_button-arrow-rigth"
              onClick={handleAdd}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
