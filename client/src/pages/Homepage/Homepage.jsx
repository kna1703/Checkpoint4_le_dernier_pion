import NavBar from "../../components/NavBar/NavBar";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div>
      <NavBar />
      <div>
        <p className={styles.titre}>Je suis la homepage</p>
      </div>
    </div>
  );
}

export default Homepage;
