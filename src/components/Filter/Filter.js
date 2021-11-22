// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/contacts/contacts-actions";
import { getValue } from "../../redux/contacts/contacts-selectors";
import styles from "./filter.module.css";

export default function Filter() {
  const value = useSelector(getValue);
  const dispatch = useDispatch();
  return (
    <label className={styles.filter}>
      <span className={styles.label}>Find contacts by name</span>
      <input type="text" value={value} onChange={(e) => dispatch(actions.changeFilter(e.target.value))}></input>
    </label>
  );
}
