import NavBar from "../../components/NavBar/NavBar";
import styles from "./Duo.module.css";

function Duo() {
  return (
    <div>
      <NavBar />
      <div>
        <p className={styles.titre}>Je suis la Duo</p>
      </div>
    </div>
  );
}

export default Duo;
