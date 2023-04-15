/*
  Warnings:

  - You are about to drop the `SellDemand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SellDemand";

-- CreateTable
CREATE TABLE "BuyDemand" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT,
    "gallery" TEXT[],
    "description" TEXT,
    "slug" TEXT,
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "estateCategory" "EstateCategory" NOT NULL DEFAULT 'DAT_NEN',

    CONSTRAINT "BuyDemand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BuyDemand_slug_key" ON "BuyDemand"("slug");
