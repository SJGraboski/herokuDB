CREATE DATABASE starwars_db;

use starwars_db;
CREATE TABLE characters (
	id INT AUTO_INCREMENT NOT NULL,
	routeName VARCHAR(30) NOT NULL,
	name VARCHAR(30) NOT NULL,
	role VARCHAR(30) NOT NULL,
	age INT NOT NULL,
	forcePoints INT NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO characters
	VALUES
		(null, "yoda", "Yoda", "Jedi Master", 900, 2000),
		(null, "darthmaul", "Darth Maul", "Sith Lord", 200, 1200),
		(null, "obiwankenobi", "Obi Wan Kenobi", "Jedi Master", 55, 1350);

