-- CreateTable
CREATE TABLE "cart" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "fk_expedition" TEXT NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expedition" (
    "id" TEXT NOT NULL,
    "amount" INTEGER,
    "nf" TEXT,
    "barcode" TEXT,
    "description_product" TEXT,
    "code_product" TEXT,
    "observation" TEXT,
    "client" TEXT,
    "fk_status" TEXT NOT NULL,
    "fk_truck" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,

    CONSTRAINT "expedition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" TEXT NOT NULL,
    "description" VARCHAR,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "truck" (
    "id" TEXT NOT NULL,
    "description" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,

    CONSTRAINT "truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "register" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "fk_role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_register_key" ON "user"("register");

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_fk_expedition_fkey" FOREIGN KEY ("fk_expedition") REFERENCES "expedition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expedition" ADD CONSTRAINT "expedition_fk_user_fkey" FOREIGN KEY ("fk_user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expedition" ADD CONSTRAINT "expedition_fk_status_fkey" FOREIGN KEY ("fk_status") REFERENCES "status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expedition" ADD CONSTRAINT "expedition_fk_truck_fkey" FOREIGN KEY ("fk_truck") REFERENCES "truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
