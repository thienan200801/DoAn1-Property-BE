/*
  Warnings:

  - The `estateCategory` column on the `Property` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "estateCategory",
ADD COLUMN     "estateCategory" TEXT;
