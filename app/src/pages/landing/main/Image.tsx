import { ImageI } from '../../../interface/api.response';

interface ImageProps {
  url: ImageI;
}

export const Image: React.FC<ImageProps> = ({ url }) => (
  <img src={`./${url.url}`} alt={url.alt} className="animate__animated" />
);
