import { CardI } from '../../../interface/api.response';

export const Card: React.FC<CardI> = ({ title, icon, category, desc }) => {
  return (
    <div className="services__card-item">
      <i className={`fab ${icon}`}></i>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="services__categories">
        {category.map(({ title, _id }) => (
          <p key={_id}>{title}</p>
        ))}
      </div>
    </div>
  );
};
