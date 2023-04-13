-- CreateTable
CREATE TABLE "cart" (
    "id_cart" UUID NOT NULL,
    "id_expedition" UUID NOT NULL,
    "amount" INTEGER NOT NULL,
    "code" VARCHAR NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id_cart")
);

-- CreateTable
CREATE TABLE "expedition" (
    "id_expedition" VARCHAR NOT NULL,
    "amount" INTEGER,
    "id_status" VARCHAR,
    "nf" VARCHAR,
    "barcode" VARCHAR,
    "id_truck" VARCHAR,
    "description_product" VARCHAR,
    "code_product" VARCHAR,
    "observation" VARCHAR,
    "client" VARCHAR,

    CONSTRAINT "expedition_pkey" PRIMARY KEY ("id_expedition")
);

-- CreateTable
CREATE TABLE "role" (
    "id_role" UUID NOT NULL,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "status" (
    "id_status" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id_status")
);

-- CreateTable
CREATE TABLE "truck" (
    "id_truck" UUID NOT NULL,
    "description" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,

    CONSTRAINT "truck_pkey" PRIMARY KEY ("id_truck")
);

-- CreateTable
CREATE TABLE "user" (
    "id_user" UUID NOT NULL,
    "register" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "id_role" UUID NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- AddForeignKey
ALTER TABLE "expedition" ADD CONSTRAINT "FK_expedition_status" FOREIGN KEY ("id_status") REFERENCES "status"("id_status") ON DELETE NO ACTION ON UPDATE NO ACTION;
