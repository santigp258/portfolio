import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from '../../../hooks/useForm';
import validator from 'validator';
import Swal from 'sweetalert2';
import { Axios } from '../../../services/api.config';
import { MailResponse } from '../../../interface/mail.response';
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

const initialState = {
  name: '',
  email: '',
  msg: ''
};

Modal.setAppElement('#root');

export const ContactModal: React.FC<ModalProps> = ({ modalIsOpen, closeModal }) => {
  const [loading, setLoading] = useState(false);

  //controll modal width
  window.innerWidth >= 768 && (customStyles.content.width = '40%');

  const {
    values: formValues,
    handleInputChange,
    reset: resetForm
  } = useForm(initialState);

  const { name, email, msg } = formValues;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      setLoading(true);
      try {
        const resp = await Axios.post<MailResponse>('/mail', formValues);
        const data = resp.data;
        Swal.fire('¡Mensaje enviado correctamente!', data.msg, 'success');

        //inital form state
        resetForm();
        //closemodal
        closeModal(false);
        //loader hide
        setLoading(false);
      } catch (error) {
        console.log(error);
        Swal.fire(
          'Error',
          'Ha surgido un error inesperado, intenta rellenar el formulario de nuevo',
          'error'
        );
      }
    }
  };

  const isFormValid = () => {
    if (name.trim().length < 3) {
      Swal.fire(
        'Error',
        'El nombre es requerido y debe tener más de 3 caracteres',
        'error'
      );
      return false;
    } else if (!validator.isEmail(email)) {
      Swal.fire('Error', 'No es un email valido', 'error');
      return false;
    } else if (msg.trim().length < 10) {
      Swal.fire(
        'Error',
        'El mensaje es requerido y debe tener más de 10 caracteres',
        'error'
      );
      return false;
    }
    return true;
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={() => closeModal(false)}
    >
      <section className="contact__contact-modal">
        <h1 className="contact__section-header">CONTACT</h1>

        <div className="contact__contact-wrapper">
          <form className="contact__contact-form" onSubmit={handleSubmit}>
            <div className="contact__list">
              <div className="contact__input-container">
                <div className="contact__input-content">
                  <input
                    type="text"
                    className="contact__form-control"
                    id="name"
                    name="name"
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    value={name}
                  />
                  <label htmlFor="">Name</label>
                </div>
              </div>

              <div className="contact__input-container">
                <div className="contact__input-content">
                  <input
                    type="email"
                    className="contact__form-control"
                    id="email"
                    name="email"
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    value={email}
                  />
                  <label htmlFor="">Email</label>
                </div>
              </div>
            </div>

            <input
              className="contact__form-control contact__text-area"
              placeholder="Message"
              name="msg"
              autoComplete="off"
              onChange={handleInputChange}
              value={msg}
            />

            <div className="contact__container-button">
              <button
                className="contact__btn portfolio_button contact__send-button"
                id="submit"
                type="submit"
                value="Send"
              >
                <div className="contact__button">
                  {loading ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    <>
                      <i className="fa fa-paper-plane"></i>
                      <span className="contact__send-text">SEND</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </Modal>
  );
};
