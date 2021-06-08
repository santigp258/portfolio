import { CardI } from '../../../interface/api.response';

export const Card: React.FC<CardI> = ({ title, icon, category, desc }) => {
  return (
    <div className="text-white p-5 bg-card mb-5 rounded-md md:w-custom md:min-h-medium">
      <i className={`fab ${icon} text-5xl mb-2`}></i>
      <h4 className="text-3xl md:text-4xl font-semibold mb-3">{title}</h4>
      <p>{desc}</p>
      <div className="flex flex-wrap w-full justify-center mt-3">
        {category.map(({ title, _id }) => (
          <p
            key={_id}
            className="capitalize mr-1 mb-1 w-2/5 flex justify-center align-middle bg-card-cat p-2 rounded-sm items-center text-center"
          >
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};
