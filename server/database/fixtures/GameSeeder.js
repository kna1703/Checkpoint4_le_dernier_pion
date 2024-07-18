const AbstractSeeder = require("./AbstractSeeder");

class GameSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "game", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    const games = [
      {
        name: "7 Wonders Duel",
        tagline: "Affrontez-vous pour la gloire de votre civilisation.",
        overview:
          "Un jeu de cartes stratégique où les joueurs construisent leur civilisation et combattent pour la suprématie.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "2",
        duration: 30,
        age: "10+",
        duo: 1,
      },
      {
        name: "Patchwork",
        tagline: "Créez la plus belle courtepointe.",
        overview:
          "Un jeu de tuiles où les joueurs assemblent des pièces de tissu pour créer la plus belle courtepointe.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "2",
        duration: 30,
        age: "8+",
        duo: 1,
      },
      {
        name: "Jaipur",
        tagline: "Marchandez pour devenir le marchand du Maharaja.",
        overview:
          "Un jeu de cartes où les joueurs collectionnent et échangent des marchandises pour gagner des points.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "2",
        duration: 30,
        age: "12+",
        duo: 1,
      },
      {
        name: "Star Realms",
        tagline: "Conquérez la galaxie avec votre flotte.",
        overview:
          "Un jeu de deck-building où les joueurs utilisent des cartes pour construire leur flotte spatiale et affronter leurs adversaires.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "2",
        duration: 20,
        age: "12+",
        duo: 1,
      },
      {
        name: "Schotten Totten",
        tagline: "Prenez le contrôle des bornes frontières !",
        overview:
          "Un jeu de cartes tactique où les joueurs s'affrontent pour prendre le contrôle de bornes en formant des combinaisons de cartes plus fortes que celles de leur adversaire.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "2",
        duration: 20,
        age: "8+",
        duo: 1,
      },
      {
        name: "Dixit",
        tagline: "Laissez libre cours à votre imagination.",
        overview:
          "Un jeu de cartes où les joueurs utilisent des illustrations pour raconter des histoires et deviner celles des autres.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "3-6",
        duration: 30,
        age: "8+",
        duo: 0,
      },
      {
        name: "Oriflamme",
        tagline: "Déjouez vos rivaux et prenez le trône.",
        overview:
          "Un jeu de cartes de stratégie où les joueurs incarnent des familles nobles luttant pour le pouvoir en utilisant la ruse, les alliances et les trahisons.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "3-5",
        duration: 30,
        age: "10+",
        duo: 0,
      },
      {
        name: "Codenames",
        tagline: "Trouvez les noms de code avant l'équipe adverse.",
        overview:
          "Un jeu de mots où deux équipes s'affrontent pour deviner les noms de code de leurs agents en se basant sur des indices donnés par leur maître-espion.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "4-8",
        duration: 30,
        age: "14+",
        duo: 0,
      },
      {
        name: "Skull King",
        tagline: "Devenez le roi des pirates en misant sur vos plis.",
        overview:
          "Un jeu de plis où les joueurs parient sur le nombre de plis qu'ils pensent pouvoir remporter, avec des cartes spéciales qui ajoutent des rebondissements.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "é-6",
        duration: 30,
        age: "8+",
        duo: 0,
      },
      {
        name: "Love Letter",
        tagline: "Gagnez le cœur de la princesse.",
        overview:
          "Un jeu de cartes où les joueurs tentent de livrer leur lettre d'amour à la princesse tout en déjouant les concurrents et en utilisant les effets des cartes personnages.",
        illustration:
          "https://images.onlinepets.com/uploads/2021/02/Sphynx.jpg?auto=format",
        background:
          "https://blog.europ-assistance.be/wp-content/uploads/2021/03/Cloud.jpg",
        player: "é-6",
        duration: 20,
        age: "10+",
        duo: 0,
      },
    ];
    // Generate and insert fake data into the 'user' table
    games.forEach((game) => {
      this.insert(game);
    });
  }
}

// Export the UserSeeder class
module.exports = GameSeeder;
