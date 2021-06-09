import { useModal } from '../../../hooks/useModal';
import { ContactModal } from '../ui/ContactModal';

export const Estimate: React.FC = () => {
  //custom hook
  const { modalIsOpen, setModalisOpen } = useModal(false);
  return (
    <section id="contact" className="bg-black text-white h-96">
      <div className="container flex justify-center items-center flex-col h-full text-center">
        <h3 className="text-2xl md:text-4xl mb-4 text-service_title ">Ahora que conoces un poco de mí</h3>
        <h2 className="text-3xl md:text-5xl mb-4 font-semibold"> Puedes contactarme y charlar </h2>
        <p className="text-xl md:text-3xl mb-4 text-service_title ">¡Respondo siempre! </p>
        <button
          className="btn btn-red w-10/12 md:w-1/3 mt-2"
          onClick={() => setModalisOpen(true)}
        >
          Empezar <i className="fas fa-arrow-right" />
        </button>
      </div>
      <ContactModal modalIsOpen={modalIsOpen} closeModal={setModalisOpen} />
    </section>
  );
};
