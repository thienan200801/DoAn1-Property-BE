/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `BuyDemand` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `BuyDemand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `area` to the `BuyDemand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `BuyDemand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `BuyDemand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `BuyDemand` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EstateCategory" AS ENUM ('DAT_NEN');

-- AlterTable
ALTER TABLE "BuyDemand" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "area" INTEGER NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "estateCategory" "EstateCategory" NOT NULL DEFAULT 'DAT_NEN',
ADD COLUMN     "postId" INTEGER NOT NULL,
ADD COLUMN     "province" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "thumbnail" TEXT,
    "gallery" TEXT[],
    "description" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagsOnPosts" (
    "postId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "TagsOnPosts_pkey" PRIMARY KEY ("postId","tagId")
);

-- CreateTable
CREATE TABLE "SellDemand" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "estateCategory" "EstateCategory" NOT NULL DEFAULT 'DAT_NEN',
    "postId" INTEGER NOT NULL,

    CONSTRAINT "SellDemand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SellDemand_postId_key" ON "SellDemand"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "BuyDemand_postId_key" ON "BuyDemand"("postId");

-- AddForeignKey
ALTER TABLE "TagsOnPosts" ADD CONSTRAINT "TagsOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnPosts" ADD CONSTRAINT "TagsOnPosts_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyDemand" ADD CONSTRAINT "BuyDemand_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellDemand" ADD CONSTRAINT "SellDemand_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
