import { useModal } from '../../../hooks/useModal';
import { ContactModal } from '../ui/ContactModal';

export const Estimate: React.FC = () => {
  //custom hook
  const { modalIsOpen, setModalisOpen } = useModal(false);
  return (
    <section id="contact" className="estimate__container">
      <div className="estimate__content">
        <h3>Ahora que conoces un poco de mí</h3>
        <h2> Puedes contactarme y charlar </h2>
        <p>¡Respondo siempre! </p>
        <button
          className="portfolio_button estimate__button"
          onClick={() => console.log('hola')}
        >
          Empezar <i className="fas fa-arrow-right" />
        </button>
      </div>
      <ContactModal modalIsOpen={modalIsOpen} closeModal={setModalisOpen} />
    </section>
  );
};
