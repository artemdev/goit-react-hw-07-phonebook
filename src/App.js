import './App.css';
import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactList from './components/contactList';
import ContactForm from './components/contactForm';
import Filter from './components/filter';

const parsedLocalContacts = JSON.parse(localStorage.getItem('contacts'));
const localContacts = parsedLocalContacts &&
  [...parsedLocalContacts].length > 0 && [...parsedLocalContacts];
const mockupContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(localContacts || mockupContacts);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = e => {
    e.preventDefault();
    const { name, number } = e.target;

    setName(name);
    setNumber(number);

    //name validation
    if (contacts.filter(item => item.name === name.value).length > 0) {
      alert('user already exists');
      return;
    }

    const newContact = {
      name: name.value,
      number: number.value,
      id: shortid.generate(),
    };
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const contactListProps = {
    contacts: contacts,
    filter: filter,
    deleteContact: deleteContact,
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
      <Filter setFilter={setFilter} />
      <ContactList {...contactListProps} />
    </div>
  );
}
