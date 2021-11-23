import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router";
import AppBar from "./components/AppBar/AppBar";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import ContactsView from "./views/ContactsView/ContactsView";

export default function App() {
  return (
    <div className="App">

      <AppBar />

      <Switch>
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>

      
      {/* <h1>Phonebook</h1>      
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </div>
  );
  
}



