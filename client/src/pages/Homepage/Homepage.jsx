import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.carousel}>
      <div className={styles.slider}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  );
}

export default Homepage;
