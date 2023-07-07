import axios from 'axios';
import {BASE_API} from '../API';
import {Contact} from '../DTOs/contactType';

const client = axios.create({
  baseURL: `${BASE_API}`,
});

const ContactService = {
  getContactList: async (): Promise<Contact[]> => {
    return client.get('/contact').then(res => {
      return res.data.data;
    });
  },
  getContactDetails: async (id: string): Promise<Contact> => {
    const res = await client.get(`/contact/${id}`);
    return res.data;
  },
};

export default ContactService;
