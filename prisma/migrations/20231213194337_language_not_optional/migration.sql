/*
  Warnings:

  - Made the column `languageId` on table `Snippet` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Snippet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "liked" INTEGER DEFAULT 0,
    "languageId" INTEGER NOT NULL,
    CONSTRAINT "Snippet_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Snippet" ("body", "createdAt", "id", "languageId", "liked", "title", "updatedAt") SELECT "body", "createdAt", "id", "languageId", "liked", "title", "updatedAt" FROM "Snippet";
DROP TABLE "Snippet";
ALTER TABLE "new_Snippet" RENAME TO "Snippet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
