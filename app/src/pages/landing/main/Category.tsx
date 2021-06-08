import { CategoryI } from '../../../interface/api.response';

export const Category: React.FC<CategoryI> = ({ link, src, title }) =>
  link ? (
    <p className="bg-tag w-3/12 text-center p-2 text-xs capitalize">
      <a target="_blank" rel="noreferrer noopener" href={src}>
        {title}
      </a>
    </p>
  ) : (
    <p className="bg-tag w-3/12 text-center p-2 text-xs capitalize">
      <span>{title}</span>
    </p>
  );
