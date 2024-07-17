CREATE TABLE user(
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  pseudo VARCHAR(30) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  hashed_password VARCHAR(255) NOT NULL
);

CREATE TABLE game (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  tagline VARCHAR(255) NOT NULL,
  overview TEXT NOT NULL,
  illustration VARCHAR(255) NOT NULL, 
  background VARCHAR(255),
  player VARCHAR(10) NOT NULL,
  duration INT NOT NULL,
  age VARCHAR(4) NOT NULL
);

-- CREATE TABLE review (
--   id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   notation INT UNSIGNED NOT NULL CHECK (notation >= 1 AND notation <= 10),
--   comment TEXT NOT NULL,
--   game_id INT NOT NULL UNSIGNED,
--   user_id INT NOT NULL UNSIGNED,
--   FOREIGN KEY (game_id) REFERENCES game(id),
--   FOREIGN KEY (user_id) REFERENCES user(id)
-- );

-- CREATE TABLE game_user (
--   game_id INT NOT NULL UNSIGNED,
--   user_id INT NOT NULL UNSIGNED,
--   PRIMARY KEY (game_id, user_id),
--   FOREIGN KEY (game_id) REFERENCES game(id),
--   FOREIGN KEY (user_id) REFERENCES user(id)
-- );