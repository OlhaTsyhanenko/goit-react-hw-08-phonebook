import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import operations from "../../redux/contacts/contacts-operations";
import styles from "../ContactsView/ContactsView.module.css"


export default function ContactsView() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);
    return (
        <>
        <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={styles.title}>Contacts</h2>
            <Filter />
            <ContactList />
        </>
    )
}

