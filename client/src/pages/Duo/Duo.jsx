import { useLoaderData } from "react-router-dom";
import styles from "./Duo.module.css";

function Duo() {
  const allGames = useLoaderData();
  const duoGames = allGames.filter(game => game.duo);
  return (
    <div>
      <div>
      {duoGames.map((game) => (
        <div key={game.id} className={styles.listGames}>
          <p>{game.name}</p>
          <p>{game.overview}</p>
        </div>
      ))}
    </div>
    </div>
  );
}


export default Duo;
