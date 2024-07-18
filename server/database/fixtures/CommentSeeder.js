const AbstractSeeder = require("./AbstractSeeder");

class CommentSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "comment", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    const comments = [
      {
        pseudo: "FanClubdeRoubaix",
        comments: "J'aimerais voir le jeu de société Roubaixe"
      },
      {
        pseudo:"Urssafito",
        comments:"Super sélection de jeux, il ne manque plus que Secret Hitler!"
      },
      {
        pseudo:"Ricetrio",
        comments:"La bonne paye",
      },
    ];
    // Generate and insert fake data into the 'user' table
    comments.forEach((comment) => {
      this.insert(comment);
    });
  }
}

// Export the UserSeeder class
module.exports = CommentSeeder;
