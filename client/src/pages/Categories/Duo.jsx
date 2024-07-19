import { useLoaderData } from "react-router-dom";
import styles from "./Categories.module.css";

function Duo() {
  // Récupération des données via le hook useLoaderData, qui est supposé charger les données depuis une route.
  const allGames = useLoaderData();

  // Filtrage des jeux pour obtenir seulement ceux qui sont en duo
  const duoGames = allGames.filter((game) => game.duo);

  // Filtrage des jeux pour obtenir ceux qui ne sont pas en duo (donc multi-joueurs)
  const multiGames = allGames.filter((game) => !game.duo);


  return (
    <div className={styles.contain}>
      <div className={styles.allBloc}>
        <div className={styles.bloc}>
          {/* Titre pour la section des jeux en duo */}
          <p className={styles.cat}>EN DUO</p>
          <div className={styles.allGames}>
            {/* Boucle sur les jeux en duo pour afficher chaque jeu */}
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
        </div>
        <div className={styles.bloc}>
          <p className={styles.cat}>MULTI-JOUEURS</p>
          <div className={styles.allGames}>
            {/* Boucle sur les jeux multi-joueurs pour afficher chaque jeu */}
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
  );
}


export default Duo;
