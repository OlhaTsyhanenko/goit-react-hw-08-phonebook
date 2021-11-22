import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from "../../redux/auth/auth-selectors"
import defaultAvatar from '../UserMenu/defaultAvatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    // const name = useSelector(authSelectors.getUserName);
    const email = useSelector(authSelectors.getEmail);
    const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}