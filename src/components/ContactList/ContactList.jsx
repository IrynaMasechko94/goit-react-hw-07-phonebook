import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { Contact } from '../../components/Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const { input } = useSelector(getFilter);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
