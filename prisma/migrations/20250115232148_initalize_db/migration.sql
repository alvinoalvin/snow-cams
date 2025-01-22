-- CreateTable
CREATE TABLE "Cams" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "mountain" TEXT,
    "type" TEXT,
    "link" TEXT,

    CONSTRAINT "Cams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cams_title_mountain_key" ON "Cams"("title", "mountain");
