import {Contact} from '../../config/DTOs/contactType';

export const CONTACT_LIST_LOADING = 'CONTACT_LIST_LOADING';
export const CONTACT_LIST_SUCCESS = 'CONTACT_LIST_SUCCESS';
export const CONTACT_LIST_FAIL = 'CONTACT_FAIL';

export const IS_LOADING = 'IS_LOADING';

export const CONTACT_LOADING = 'CONTACT_LOADING';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_FAIL = 'CONTACT_FAIL';

export const FORWARD_LOADING = 'FORWARD_LOADING';
export const FORWARD_SUCCESS = 'FORWARD_SUCCESS';
export const FORWARD_FAIL = 'FORWARD_FAIL';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export interface ContactListLoading {
  type: typeof CONTACT_LIST_LOADING;
}

export interface ContactListFail {
  type: typeof CONTACT_LIST_FAIL;
}

export interface ContactListSuccess {
  type: typeof CONTACT_LIST_SUCCESS;
  payload: Contact[];
}

export interface PatientLoading {
  type: typeof CONTACT_LOADING;
}

export interface PatientFail {
  type: typeof CONTACT_FAIL;
}

export interface PatientSuccess {
  type: typeof CONTACT_SUCCESS;
  payload: Contact;
}

export interface ForwardLoading {
  type: typeof FORWARD_LOADING;
}

export interface ForwardFail {
  type: typeof FORWARD_FAIL;
}

export interface ForwardSuccess {
  type: typeof FORWARD_SUCCESS;
  payload: Contact | any;
}

export interface showModal {
  type: typeof SHOW_MODAL;
}
export interface hideModal {
  type: typeof HIDE_MODAL;
}

export type ContactListDispatchTypes =
  | ContactListLoading
  | ContactListFail
  | ContactListSuccess;

export type PatientDispatchTypes =
  | PatientLoading
  | PatientFail
  | PatientSuccess;

export type ForwardDispatchTypes =
  | ForwardLoading
  | ForwardFail
  | ForwardSuccess;

export type ShowModalDispatchTypes = showModal | hideModal;
