import Swal from 'sweetalert2';
import { InitialStateFormI } from '../interface/contactmodal.interface';
import { MailResponse } from '../interface/mail.response';
import { Axios } from './api.config';

export const sendEmail = async (formValues: InitialStateFormI) => {
  try {
    const resp = await Axios.post<MailResponse>('/mail', formValues);
    const data = resp.data;
    return data.ok
      ? Swal.fire('¡Mensaje enviado correctamente!', data.msg, 'success')
      : Swal.fire(
          '¡Ha surgido un error inesperado, intenta rellenar el formulario de nuevo!',
          data.msg,
          'error'
        );
  } catch (error) {
    console.log(error);
    return Swal.fire(
      'Error',
      'Ha surgido un error inesperado, intenta rellenar el formulario de nuevo',
      'error'
    );
  }
};
