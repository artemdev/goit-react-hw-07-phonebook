import Section from './section';
import shortid from 'shortid';
import { getContacts } from '../redux/contacts/contacts-selectors';
import { deleteContact } from '../redux/contacts/contacts-operations';
import { getFilter } from '../redux/filter/filter-selectors';
import { connect } from 'react-redux';

function ContactList({ contacts, filter, deleteContact }) {
  const filterContacts = () => {
    return contacts.filter(
      item => item.name && item.name.toLowerCase().includes(filter),
    );
  };

  return (
    <Section title="Contacts">
      {filterContacts().map(item => (
        <div key={shortid.generate()}>
          {item.name} {item.number}
          <button onClick={() => deleteContact(item.id)}>delete</button>
        </div>
      ))}
    </Section>
  );
}

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
    filter: getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
