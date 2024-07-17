import NavBar from "../../components/NavBar/NavBar";
import styles from "./Multi.module.css";

function Multi() {
  return (
    <div>
      <NavBar />
      <div>
        <p className={styles.titre}>Je suis la Multi</p>
      </div>
    </div>
  );
}

export default Multi;
