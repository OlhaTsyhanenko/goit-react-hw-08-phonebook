import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from "../LoginView/LoginView.module.css";


export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.loginForm}>
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
      <Button variant="outline-secondary" type="submit" className={styles.btn} >Enter</Button>
      </Form>
  );
}