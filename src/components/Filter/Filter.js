// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contacts/contacts-actions";
import { getValue } from "../../redux/contacts/contacts-selectors";
import styles from "./filter.module.css";
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Filter() {
  const value = useSelector(getValue);
  const dispatch = useDispatch();
  return (
    <Form className={styles.phoneForm}>
    <Form.Group className="mb-3" controlId="formBasicFilter">
    <Form.Label >Find contacts by name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          type="text"
          value={value}
          onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
        />
      </Form.Group>
  </Form>
  );
}
