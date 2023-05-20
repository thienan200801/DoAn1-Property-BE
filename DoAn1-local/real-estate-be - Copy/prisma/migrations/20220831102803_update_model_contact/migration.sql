/*
  Warnings:

  - Made the column `fullname` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "fullname" SET NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "message" DROP NOT NULL,
ALTER COLUMN "noteByAdmin" DROP NOT NULL;
