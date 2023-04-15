/*
  Warnings:

  - You are about to drop the `BuyDemand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BuyDemand" DROP CONSTRAINT "BuyDemand_postId_fkey";

-- DropTable
DROP TABLE "BuyDemand";
