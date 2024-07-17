import NavBar from "../../components/NavBar/NavBar";
import styles from "./Connexion.module.css";

function Connexion() {
  return (
    <div>
      <NavBar />
      <div>
        <p className={styles.titre}>Je suis la Connexion</p>
      </div>
    </div>
  );
}

export default Connexion;
