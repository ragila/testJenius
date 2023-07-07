import {
  CONTACT_LIST_LOADING,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_LOADING,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
  ContactListDispatchTypes,
  PatientDispatchTypes,
} from '../types';
import {Contact} from '../../config/DTOs/contactType';

import ContactService from '../../config/services/contactServices';
import {Dispatch} from 'redux';

export const getContactListAction =
  () => async (dispatch: Dispatch<ContactListDispatchTypes>) => {
    try {
      dispatch({
        type: CONTACT_LIST_LOADING,
      });
      const res: Contact[] = await ContactService.getContactList();

      dispatch({
        type: CONTACT_LIST_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: CONTACT_LIST_FAIL,
      });
    }
  };

export const getContactDetails =
  (id: string) => async (dispatch: Dispatch<PatientDispatchTypes>) => {
    try {
      dispatch({
        type: CONTACT_LOADING,
      });
      const res = await ContactService.getContactDetails(id);

      dispatch({
        type: CONTACT_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: CONTACT_FAIL,
      });
    }
  };
