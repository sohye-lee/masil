-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Snippet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "tagId" INTEGER
);
INSERT INTO "new_Snippet" ("body", "createdAt", "id", "tagId", "title", "updatedAt") SELECT "body", "createdAt", "id", "tagId", "title", "updatedAt" FROM "Snippet";
DROP TABLE "Snippet";
ALTER TABLE "new_Snippet" RENAME TO "Snippet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
