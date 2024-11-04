import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/slices/contacts';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    dispatch(addContact({ name: name, phone: number }));
    return true;
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formName}
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            className={css.formNumber}
            type="tel"
            name="number"
            required
            placeholder="Enter your number"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
