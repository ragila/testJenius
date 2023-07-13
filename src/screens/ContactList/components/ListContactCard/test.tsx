import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListContactCard from '../ListContactCard';

describe('ListContactCard', () => {
  const contacts = [
    {
      id: '1',
      name: 'Jon',
      firstName: 'John',
      lastName: 'Kennedy',
      age: '25',
      photo: 'N/A',
    },
    {
      id: '2',
      name: 'Jen',
      firstName: 'Jane',
      lastName: 'Miller',
      age: '30',
      photo: 'https://example.com/profile.jpg',
    },
  ];

  const onPressContact = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders contact items correctly', () => {
    const {getByText, getByTestId} = render(
      <ListContactCard onPressContact={onPressContact} contacts={contacts} />,
    );

    const contact1Name = getByText('John');
    const contact1Age = getByText('Age: 25');
    const contact2Name = getByText('Jane');
    const contact2Age = getByText('Age: 30');
    const contact1Image = getByTestId('contactPhoto-1');
    const contact2Image = getByTestId('contactPhoto-2');

    expect(contact1Name).toBeTruthy();
    expect(contact1Age).toBeTruthy();
    expect(contact2Name).toBeTruthy();
    expect(contact2Age).toBeTruthy();
    expect(contact1Image).toBeTruthy();
    expect(contact2Image).toBeTruthy();
  });

  it('calls onPressContact when a contact item is pressed', () => {
    const {getByTestId} = render(
      <ListContactCard onPressContact={onPressContact} contacts={contacts} />,
    );

    const contactItem = getByTestId('contactItem-1');
    fireEvent.press(contactItem);

    expect(onPressContact).toHaveBeenCalledTimes(1);
    expect(onPressContact).toHaveBeenCalledWith(contacts[0]);
  });
});
