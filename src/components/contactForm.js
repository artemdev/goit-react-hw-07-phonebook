import Section from './section';

export default function ContactForm({ addContact }) {
  return (
    <Section title="Phonebook">
      <form action="" onSubmit={addContact}>
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
