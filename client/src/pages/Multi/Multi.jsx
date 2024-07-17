import { useLoaderData } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Multi.module.css";

function Multi() {
  const allGames = useLoaderData();
  const multiGames = allGames.filter(game => !game.duo);
  return (
    <div>
      <NavBar />
      <div>
      {multiGames.map((game) => (
        <div key={game.id} className={styles.listGames}>
          <p>{game.name}</p>
          <p>{game.overview}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Multi;
