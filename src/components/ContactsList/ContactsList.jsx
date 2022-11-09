import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts
    .filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    })
    .sort((f, s) => f.name.localeCompare(s.name));

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
