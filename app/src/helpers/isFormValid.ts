import { InitialStateFormI } from '../interface/contactmodal.interface';
import Swal from 'sweetalert2';

export const isFormValid = ({ name, email, msg }: InitialStateFormI) => {
  if (name.trim().length < 3) {
    Swal.fire(
      'Error',
      'El nombre es requerido y debe tener más de 3 caracteres',
      'error'
    );
    return false;
  } else if (!isEmail(email)) {
    Swal.fire('Error', 'No es un email válido', 'error');
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

const isEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
