-- CreateTable
CREATE TABLE "SellDemand" (
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

    CONSTRAINT "SellDemand_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SellDemand_slug_key" ON "SellDemand"("slug");
