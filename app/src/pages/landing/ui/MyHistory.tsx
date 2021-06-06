import Modal from 'react-modal';
import { ModalProps } from '../../../interface/modal.interface';

const customStyles = {
  content: {
    width: '90%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    borderRadius: '10px'
  }
};

Modal.setAppElement('#root');

export const MyHistory: React.FC<ModalProps> = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={() => closeModal(false)}
    >
      <h1>Hello world!</h1>
    </Modal>
  );
};
