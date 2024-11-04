import { useDispatch } from 'react-redux';
import { delContact } from '../../redux/slices/contacts';
import css from '../ContactList/ContactList.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(delContact(contact.id));

  return (
    <div>
      <span>
        {contact.name}: <span>{contact.phone}</span>
      </span>
      <button
        type="button"
        className={css.contactListItemBtn}
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );
};
