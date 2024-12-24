/*
  Warnings:

  - A unique constraint covering the columns `[title,mountain]` on the table `Cams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cams_title_mountain_key" ON "Cams"("title", "mountain");
