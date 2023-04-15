-- CreateEnum
CREATE TYPE "DemandType" AS ENUM ('BUY', 'SELL');

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "demandType" "DemandType" NOT NULL DEFAULT 'SELL',
    "message" TEXT NOT NULL,
    "noteByAdmin" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
