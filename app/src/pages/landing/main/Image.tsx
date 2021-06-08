import { useEffect } from 'react';
import { ImageI } from '../../../interface/api.response';

interface ImageProps {
  url: ImageI;
  changeImage: () => void;
}
export const Image: React.FC<ImageProps> = ({ url, changeImage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      changeImage();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [changeImage]);

  return <img src={`./${url.url}`} alt={url.alt} className="img-slider" />;
};
