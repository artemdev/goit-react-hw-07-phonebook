import Section from './section';
import * as actions from '../utils/actions';
import { connect } from 'react-redux';
import shortid from 'shortid';

function ContactForm({ contacts, addContact }) {
  const handleContact = e => {
    e.preventDefault();
    const { name, number } = e.target;

    if (contacts.filter(item => item.name === name.value).length > 0) {
      alert('user already exists');
      return;
    }

    addContact(name.value, number.value, shortid.generate());
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
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (number, name, id) =>
      dispatch(actions.addContact(number, name, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
