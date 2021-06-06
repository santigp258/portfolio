import { useState } from 'react';

export const useModal = (initialState: boolean = false) => {
  const [modalIsOpen, setModalisOpen] = useState<boolean>(initialState);
  return { modalIsOpen, setModalisOpen };
};
