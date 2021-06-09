import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from '../../../hooks/useForm';
import { ModalProps } from '../../../interface/modal.interface';
import { InitialStateFormI } from '../../../interface/contactmodal.interface';
import { sendEmail } from '../../../services/sendmail.service';
import { isFormValid } from '../../../helpers/isFormValid';

const customStyles = {
  content: {
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

const initialState: InitialStateFormI = {
  name: '',
  email: '',
  msg: ''
};

Modal.setAppElement('#root');

export const ContactModal: React.FC<ModalProps> = ({ modalIsOpen, closeModal }) => {
  const [loading, setLoading] = useState(false);

  const {
    values: formValues,
    handleInputChange,
    reset: resetForm
  } = useForm(initialState);

  const { name, email, msg } = formValues;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid({ ...formValues })) {
      setLoading(true);
      await sendEmail(formValues);
      resetForm();
      //closemodal
      closeModal(false);
      //loader hide
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={() => closeModal(false)}
    >
      <section className="w-80 md:w-custom2 bg-black text-white p-7 text-center">
        <h1 className="text-4xl font-semibold tracking-widest">CONTACT</h1>

        <div className="h-full">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-3">
              <div className="mt-9">
                <div className="relative">
                  <input
                    type="text"
                    className="btn btn-form bg-black text-white font-normal w-full border border-white"
                    id="name"
                    name="name"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                  />
                  <label htmlFor="name" className="absolute -top-7 left-0">
                    Name
                  </label>
                </div>
              </div>

              <div className="mt-8 md:mt-9">
                <div className="relative">
                  <input
                    type="email"
                    className="btn btn-form bg-black text-white font-normal w-full border border-white"
                    id="email"
                    name="email"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                  />
                  <label htmlFor="email" className="absolute -top-7 left-0">
                    Email
                  </label>
                </div>
              </div>
            </div>

            <textarea
              className="btn btn-form bg-black text-white font-normal mt-6 h-2/6 w-full border border-white resize-none"
              placeholder="Message"
              name="msg"
              autoComplete="off"
              onChange={handleInputChange}
              value={msg}
            ></textarea>

            <div className="mt-6">
              <button
                className="btn bg-primary overflow-hidden w-full"
                id="submit"
                type="submit"
                value="Send"
              >
                {loading ? (
                  <i className="fa fa-spinner fa-spin" />
                ) : (
                  <div className="contact__button h-5">
                    <i className="fa fa-paper-plane" />
                    <span className="mt-1 block font-normal tracking-wider">SEND</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Modal>
  );
};
