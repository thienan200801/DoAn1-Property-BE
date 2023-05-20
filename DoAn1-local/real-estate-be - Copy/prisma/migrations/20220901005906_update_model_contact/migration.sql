-- CreateEnum
CREATE TYPE "ProcessingStatus" AS ENUM ('PENDING', 'WORKING', 'COMPLETE');

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "processingStatus" "ProcessingStatus" NOT NULL DEFAULT 'PENDING';
