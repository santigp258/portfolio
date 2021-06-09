import { Card } from './Card';
import { CardI } from '../../../interface/api.response';
import { useData } from '../../../global-stores/useData';

export const Services: React.FC = () => {
  const cards = useData(state => state.cards);
  return (
    <section id="services" className="bg-primary py-7 mt-5">
      <div className="container mt-5">
        <div>
          <h4 className="text-service_title text-3xl md:text-5xl md:mb-2  font-semibold">
            Mis servicios
          </h4>
          <h4 className="text-3xl  md:text-5xl text-white font-semibold mb-5">
            Puedo ayudarte en esto
          </h4>
        </div>
        <div className="flex flex-wrap justify-between">
          {cards.map(({ ...card }: CardI) => (
            <Card {...card} key={card._id} />
          ))}
        </div>
      </div>
    </section>
  );
};
