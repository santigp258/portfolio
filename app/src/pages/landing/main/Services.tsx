import { Card } from './Card';
import { CardI } from '../../../interface/api.response';

export const Services: React.FC = () => {
  //const { cards } = useSelector(state => state.portfolio);
  const cards: CardI[] = [
    {
      _id: '6080c604b992ac2a602efcef',
      title: 'React',
      desc: 'Quise aprender React y un nuevo mundo se abrió camino, es una excelente librería para crear aplicaciones web, de hecho este portafolio está creado con este. También me he adentrado en el uso de hooks y Redux. ',
      icon: 'fa-react',
      category: [
        {
          _id: '6080c604b992ac2a602efcf0',
          title: 'Jest'
        },
        {
          _id: '6080c604b992ac2a602efcf1',
          title: 'Hooks'
        },
        {
          _id: '6080c604b992ac2a602efcf2',
          title: 'Redux'
        }
      ]
    }
  ];

  return (
    <section id="services" className="container">
      <div className="services__help">
        <h4>Mis servicios</h4>
        <h4>Puedo ayudarte en esto</h4>
      </div>
      <div className="services__cards">
        {cards.map(({ ...card }) => (
          <Card {...card} key={card._id} />
        ))}
      </div>
    </section>
  );
};
