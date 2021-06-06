//import { useEffect, useRef, useState } from 'react';
//import { Image } from './Image';

export const Works: React.FC = () => {
  return <h1>Works!</h1>;
  /* //data from portfolio store
  const { works } = useSelector(state => state.portfolio);

  const [work, setWork] = useState(0);
  const [img, setImg] = useState(0);
  const { categories, title, desc, images, repo, web } = works[work];
  const url = images[img];

  const changeImage = () => {
    if (img === images.length - 1) {
      setImg(0);
      return;
    }
    setImg(img + 1);
  };
  //subtract array index
  const handleSubstract = () => {
    if (work === 0) {
      return;
    }
    setImg(0);
    setWork(work - 1);
  };
  const handleAdd = () => {
    if (work === works.length - 1) {
      return;
    }
    setImg(0);
    setWork(work + 1);
  };
  const divRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      divRef.current.classList.toggle('animate__fadeIn');
    }
  }, [work]);
  return (
    <section id="works" className="works__container">
      <h4>Mis trabajos</h4>
      <h4 className="works__descrip">Proyectos en los que he participado</h4>
      <div className="works__content">
        <div className="works__container-image-left">
          <div className="works__image">
            <Image url={url} changeImage={changeImage} images={images} />
          </div>
        </div>
        <div className="works__content-right">
          <div className="works__content-header">
            <h5 className="animate__animated animate__bounce" ref={divRef}>
              {title}
            </h5>
            <p>{desc}</p>
            <div className="works__content-tag">
              {categories.map(({ title, link, src }, i) =>
                link ? (
                  <p className="works__tag-item" key={i}>
                    <a target="_blank" rel="noreferrer noopener" href={src}>
                      {title}
                    </a>
                  </p>
                ) : (
                  <p className="works__tag-item" key={i}>
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
  ); */
};
