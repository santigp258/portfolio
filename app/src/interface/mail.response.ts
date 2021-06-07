// Generated by https://quicktype.io

export interface MailResponse {
  ok: boolean;
  msg: string;
  info: boolean;
  id: string;
  emailSaved: EmailI;
}

export interface EmailI {
  _id: string;
  email: string;
  msg: string;
  name: string;
  email_id: string;
  createdAt?: string;
  updatedAt?: string;
}