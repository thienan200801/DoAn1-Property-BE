-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'HIDDEN');

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "postStatus" "PostStatus" NOT NULL DEFAULT 'DRAFT';
