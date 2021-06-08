import { useState } from 'react';
import { useData } from '../global-stores/useData';

export const useWorks = () => {
  //data from portfolio store
  const works = useData(state => state.works);
  const [work, setWork] = useState(0);
  const [img, setImg] = useState(0);
  const { images } = works[work];

  const changeImage = () => {
    if (img === images.length - 1) {
      setImg(0);
      return;
    }
    setImg(img + 1);
  };
  //subtract array index
  const handleSubstract = () => {
    if (work === 0) return;

    setImg(0);
    setWork(work - 1);
  };
  const handleAdd = () => {
    if (work === works.length - 1) return;

    setImg(0);
    setWork(work + 1);
  };

  return {
    img,
    works: works[work],
    changeImage,
    handleAdd,
    handleSubstract
  };
};
