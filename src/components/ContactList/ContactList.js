// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styles from "./contactList.module.css";
import operations from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import { useEffect } from "react";
import { getLoading } from "../../redux/contacts/contacts-selectors";
import Loader from "../Loader/Loader";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
   const isLoading = useSelector(getLoading);
  
  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  
  return (
    <>
      {isLoading && <Loader />}
      {contacts.length > 0 &&
        <ul className={styles.contactList}>
          {contacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.contactList__item}>
          {name}: {phone}
          <button
            type="button"
            onClick={() => dispatch(operations.deleteContact(id))}
            className={styles.btn}
          >
            Delete
          </button>
        </li>
      ))}
      </ul>
      }
    </>
  );
}
