BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  mail TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL
);
INSERT INTO "users" ("id","mail","password","role") VALUES (1,'admin@cliniqueplus.fr','azerty','admin'),
 (2,'secretaire@cliniqueplus.fr','azerty','non-soignant'),
 (3,'jean.dupont@cliniqueplus.fr','azerty','admin'),
 (4,'marie.bernard@cliniqueplus.fr','azerty','admin'),
 (5,'paul.martin@cliniqueplus.fr','azerty','médecin'),
 (6,'sophie.durand@cliniqueplus.fr','azerty','médecin'),
 (7,'luc.moreau@cliniqueplus.fr','azerty','infirmière'),
 (8,'emma.leroy@cliniqueplus.fr','azerty','infirmière'),
 (9,'claire.robert@cliniqueplus.fr','azerty','non-soignant'),
 (10,'thomas.richard@cliniqueplus.fr','azerty','non-soignant'),
 (11,'julie.petit@cliniqueplus.fr','azerty','comptable'),
 (12,'antoine.garnier@cliniqueplus.fr','azerty','comptable');
COMMIT;
