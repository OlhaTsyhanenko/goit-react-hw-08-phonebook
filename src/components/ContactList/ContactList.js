// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styles from "./contactList.module.css";
import operations from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import { getLoading } from "../../redux/contacts/contacts-selectors";
import Loader from "../Loader/Loader";
import { Button } from 'react-bootstrap';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
   const isLoading = useSelector(getLoading);
  
  
  return (
    <>
      {isLoading && <Loader />}
      {contacts.length > 0 &&
        <ul className={styles.contactList}>
          {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactList__item}>
              {name}: {number}
              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => dispatch(operations.deleteContact(id))}
                className={styles.btn} >Delete
              </Button>
        </li>
      ))}
      </ul>
      }
    </>
  );
}
