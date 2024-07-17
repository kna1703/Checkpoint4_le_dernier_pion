import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.containParents}>
      <div className={styles.containLeft}>
        <Link to="/">
          <img src={Logo} alt="logo le dernier pion" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.containRight}>
        <Link to="/enduo">
          <p className={styles.duo}>En duo</p>
        </Link>
        <Link to="/multijoueurs">
          <p className={styles.multi}>Multi-joueurs</p>
        </Link>
        <Link to="/connexion">
          <p className={styles.compte}>Compte</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
