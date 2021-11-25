import Spinner from "react-loader-spinner";
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Spinner type="ThreeDots"
        color="rgb(13 110 253 / 45%)"
        height={100}
        width={100}
        timeout={3000} />
  </div>
);
export default Loader;