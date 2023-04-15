/*
  Warnings:

  - You are about to drop the `BuyDemand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SellDemand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnPosts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BuyDemand" DROP CONSTRAINT "BuyDemand_id_fkey";

-- DropForeignKey
ALTER TABLE "SellDemand" DROP CONSTRAINT "SellDemand_postId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPosts" DROP CONSTRAINT "TagsOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnPosts" DROP CONSTRAINT "TagsOnPosts_tagId_fkey";

-- DropTable
DROP TABLE "BuyDemand";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "SellDemand";

-- DropTable
DROP TABLE "TagsOnPosts";

-- CreateTable
CREATE TABLE "Property" (
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

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_slug_key" ON "Property"("slug");
