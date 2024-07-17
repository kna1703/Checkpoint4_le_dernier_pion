import NavBar from "../../components/NavBar/NavBar";
import styles from "./Inscription.module.css";

function Inscription() {
  return (
    <div>
      <NavBar />
      <div>
        <p className={styles.titre}>Je suis la Inscription</p>
      </div>
    </div>
  );
}

export default Inscription;
