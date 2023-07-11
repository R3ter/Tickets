-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Events" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi modi quibusdam illo minima, nihil sit, sapiente, delectus qui eum cupiditate illum quod iusto culpa quis atque tempore voluptatibus aperiam.'
);
INSERT INTO "new_Events" ("date", "id", "price", "quantity", "title") SELECT "date", "id", "price", "quantity", "title" FROM "Events";
DROP TABLE "Events";
ALTER TABLE "new_Events" RENAME TO "Events";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
