-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Orders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "totalPrice" REAL NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Orders" ("createdAt", "email", "eventId", "id", "quantity", "totalPrice", "userId") SELECT "createdAt", "email", "eventId", "id", "quantity", "totalPrice", "userId" FROM "Orders";
DROP TABLE "Orders";
ALTER TABLE "new_Orders" RENAME TO "Orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
