import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from "../RegisterView/RegisterView.module.css";


export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
    
  const handleSubmit = e => {
      e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (

    <Form onSubmit={handleSubmit} autoComplete="off" className={styles.regForm}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label >Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          required
          onChange={handleChange} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          required
          onChange={handleChange} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="outline-secondary" type="submit" className={styles.btn}>Enter</Button>
      </Form>
  );
}