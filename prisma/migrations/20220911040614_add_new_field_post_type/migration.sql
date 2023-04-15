-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('PROJECT', 'NEWS');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postType" "PostType" NOT NULL DEFAULT 'NEWS';
