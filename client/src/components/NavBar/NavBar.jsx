import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Game from "../../assets/images/game.png";
import Account from "../../assets/images/account.png";
import Rate from "../../assets/images/rate.png";

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
          <img src={Game} alt="Jeux" className={styles.player} />
        </Link>
        <Link to="/connexion">
          <img src={Account} alt="Compte" className={styles.player} />
        </Link>
        <img src={Rate} alt="Contact" className={styles.player} />
      </div>
    </div>
  );
}

export default NavBar;
