-- CreateTable
CREATE TABLE "BuyDemand" (
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "estateCategory" "EstateCategory" NOT NULL DEFAULT 'DAT_NEN',
    "id" INTEGER NOT NULL,

    CONSTRAINT "BuyDemand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BuyDemand" ADD CONSTRAINT "BuyDemand_id_fkey" FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
