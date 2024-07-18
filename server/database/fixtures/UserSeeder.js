const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    const users = [
        {
            pseudo: "",
            email:"",
            hashed_password:"",
            role:"",
        },
    ];
    // Generate and insert fake data into the 'user' table
   users.forEach((user) => {
    this.insert(user);
   });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
