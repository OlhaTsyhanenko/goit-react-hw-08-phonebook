import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import shortid from "shortid";
import operations from "../../redux/contacts/contacts-operations";
import { getItems } from "../../redux/contacts/contacts-selectors";
import styles from "./contactForm.module.css";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  // const nameInputId = shortid.generate();
  // const numberInputId = shortid.generate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('name',name);
    const repeatName = name => items.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (repeatName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(operations.addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  
  return (
    <Form className={styles.phoneForm} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label >Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label >Phone</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}/>
      </Form.Group>
      <Button variant="outline-secondary" type="submit" className={styles.btn} >Add contact</Button>
  </Form>
  );
}
