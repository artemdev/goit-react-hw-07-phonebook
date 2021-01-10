import Section from './section';
import shortid from 'shortid';

export default function ContactList({ contacts, filter, deleteContact }) {
  const filterContacts = () => {
    return contacts.filter(item => item.name.toLowerCase().includes(filter));
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
