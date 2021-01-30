import Section from './section';
import { addContact } from '../redux/contacts/contacts-operations';
import { getContacts } from '../redux/contacts/contacts-selectors';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getInitialContacts } from '../redux/api/api-actions.js';

function ContactForm({ contacts, addContact }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialContacts());
  }, [dispatch]);

  const handleContact = e => {
    e.preventDefault();
    const { name, number } = e.target;

    if (contacts.filter(item => item.name === name.value).length > 0) {
      alert('user already exists');
      return;
    }
    const contact = { name: name.value, number: number.value };
    addContact(contact);
  };
  return (
    <Section title="Phonebook">
      <form action="" onSubmit={handleContact}>
        <label htmlFor="name">
          Name <br />
          <input type="text" id="name" />
        </label>
        <br />
        <label htmlFor="number">
          Number <br />
          <input type="text" id="number" />
        </label>
        <br />

        <button type="submit">Add contact</button>
      </form>
    </Section>
  );
}

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
