import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from "../../redux/auth/auth-selectors"
import defaultAvatar from '../UserMenu/defaultAvatar.png';
import styles from "../UserMenu/UserMenu.module.css";
import { Button } from 'react-bootstrap';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    // const email = useSelector(authSelectors.getEmail);
    const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" width="60" className={styles.avatar} />
      <span className={styles.name}>Hello, {name}</span>
      <Button variant="outline-secondary"
        type="button"
        className={styles.btn}
        onClick={() => dispatch(authOperations.logOut())} >
        Logout
      </Button>
    </div>
  );
}