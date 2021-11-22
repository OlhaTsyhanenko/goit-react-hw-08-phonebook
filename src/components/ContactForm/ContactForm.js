import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import operations from "../../redux/contacts/contacts-operations";
import { getItems } from "../../redux/contacts/contacts-selectors";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const repeatName = name => items.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (repeatName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(operations.addContact({ name, phone }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };
  
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameInputId}
          className={styles.contactName}
        />
      </label>
      <label htmlFor={phoneInputId}>Number
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          id={phoneInputId}
          className={styles.contactNumber}
        />
      </label>
      <button type="submit" className={styles.btn}>Add contact</button>
    </form>
  );
}
