import { useLoaderData } from "react-router-dom";
import styles from "./Duo.module.css";

function Duo() {
  const allGames = useLoaderData();
  const duoGames = allGames.filter((game) => game.duo);
  return (
    <div>
      <div>
        {duoGames.map((game) => (
          <div key={game.id} className={styles.listGames}>
            <p>{game.name}</p>
            <img
              src={game.illustration}
              alt={game.name}
              className={styles.fond}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Duo;
