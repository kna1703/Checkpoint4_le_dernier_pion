// Import access to database tables
const argon2 = require("argon2");

const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await tables.user.readAll();

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const user = req.body;
  try {
    // Hash the password before creating the user
    const hashedPassword = await argon2.hash(user.password);
    // Replace the plain text password with the hashed password
    user.password = hashedPassword;

    // Create a new user with the hashed password
    const insertId = await tables.user.create(user);

    res.status(201).json({ insertId }); // Respond with the created user's ID
  } catch (err) {
    console.error("Error in add function:", err);
    res.status(500).json();
    next(err);
  }
};


// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
