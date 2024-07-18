import { useLoaderData } from "react-router-dom";
import styles from "./Categories.module.css";

function Duo() {
  const allGames = useLoaderData();
  const duoGames = allGames.filter((game) => game.duo);
  const multiGames = allGames.filter((game) => !game.duo);
  return (
    <div className={styles.contain}>
      <div className={styles.allBloc}>
        <div className={styles.bloc}>
          <p className={styles.cat}>EN DUO</p>
          <div className={styles.allGames}>
            {duoGames.map((game) => (
              <div key={game.id} className={styles.listGames}>
                <img
                  src={game.illustration}
                  alt={game.name}
                  className={styles.image}
                />
                <p className={styles.gameName}>{game.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.bloc}>
            <p className={styles.cat}>MULTI-JOUEURS</p>
            <div className={styles.allGames}>
              {multiGames.map((game) => (
                <div key={game.id} className={styles.listGames}>
                  <img
                    src={game.illustration}
                    alt={game.name}
                    className={styles.image}
                  />
                  <p className={styles.gameName}>{game.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Duo;
