import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./AppBar.module.css"

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}