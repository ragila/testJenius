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

interface IinitialState {
  contact: Contact[];
  details: any;
  loading: boolean;
  error: boolean;
}

const initialState: IinitialState = {
  contact: [],
  details: {},
  loading: false,
  error: false,
};
const patientReducer = (
  state: IinitialState = initialState,
  action: ContactListDispatchTypes | PatientDispatchTypes,
): IinitialState => {
  switch (action.type) {
    case CONTACT_LIST_FAIL:
      return {...state, loading: false, error: true};
    case CONTACT_LIST_LOADING:
      return {...state, loading: true};
    case CONTACT_LIST_SUCCESS:
      return {...state, loading: false, contact: action.payload, error: false};
    case CONTACT_FAIL:
      return {...state, loading: false, error: true};
    case CONTACT_LOADING:
      return {...state, loading: true};
    case CONTACT_SUCCESS:
      return {...state, loading: false, details: action.payload};
    default:
      return state;
  }
};

export default patientReducer;
