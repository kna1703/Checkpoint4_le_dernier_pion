const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Détermine le rôle de l'utilisateur en fonction de son adresse e-mail
    const role = user.email === "adeline@admin.com" ? "admin" : "user";

    const [result] = await this.database.query(
      `
      INSERT INTO ${this.table} (pseudo, email, hashed_password, role)
      VALUES (?, ?, ?, ?)
    `,
      [user.pseudo, user.email, user.password, role]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select id, email, role from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, email, role from ${this.table}`
    );

    // Return the array of items
    return rows;
  }

  async readConnexion(pseudo) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE pseudo = ?`,
      [pseudo]
    );

    return rows;
  }
}

// The U of CRUD - Update operation
// TODO: Implement the update operation to modify an existing item

// async update(item) {
//   ...
// }

// The D of CRUD - Delete operation
// TODO: Implement the delete operation to remove an item by its ID

// async delete(id) {
//   ...
// }

module.exports = UserRepository;
