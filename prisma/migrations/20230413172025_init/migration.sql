/*
  Warnings:

  - The primary key for the `cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_cart` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `id_expedition` on the `cart` table. All the data in the column will be lost.
  - The primary key for the `expedition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_expedition` on the `expedition` table. All the data in the column will be lost.
  - You are about to drop the column `id_status` on the `expedition` table. All the data in the column will be lost.
  - You are about to drop the column `id_truck` on the `expedition` table. All the data in the column will be lost.
  - The primary key for the `role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_role` on the `role` table. All the data in the column will be lost.
  - The primary key for the `status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_status` on the `status` table. All the data in the column will be lost.
  - The primary key for the `truck` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_truck` on the `truck` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `user` table. All the data in the column will be lost.
  - Added the required column `fk_expedition` to the `cart` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `cart` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `fk_status` to the `expedition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_truck` to the `expedition` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_user` to the `expedition` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `expedition` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `role` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `status` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `truck` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `fk_role` to the `user` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `user` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "expedition" DROP CONSTRAINT "FK_expedition_status";

-- AlterTable
ALTER TABLE "cart" DROP CONSTRAINT "cart_pkey",
DROP COLUMN "id_cart",
DROP COLUMN "id_expedition",
ADD COLUMN     "fk_expedition" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "code" SET DATA TYPE TEXT,
ADD CONSTRAINT "cart_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "expedition" DROP CONSTRAINT "expedition_pkey",
DROP COLUMN "id_expedition",
DROP COLUMN "id_status",
DROP COLUMN "id_truck",
ADD COLUMN     "fk_status" TEXT NOT NULL,
ADD COLUMN     "fk_truck" TEXT NOT NULL,
ADD COLUMN     "fk_user" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "nf" SET DATA TYPE TEXT,
ALTER COLUMN "barcode" SET DATA TYPE TEXT,
ALTER COLUMN "description_product" SET DATA TYPE TEXT,
ALTER COLUMN "code_product" SET DATA TYPE TEXT,
ALTER COLUMN "observation" SET DATA TYPE TEXT,
ALTER COLUMN "client" SET DATA TYPE TEXT,
ADD CONSTRAINT "expedition_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "role" DROP CONSTRAINT "role_pkey",
DROP COLUMN "id_role",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT,
ADD CONSTRAINT "role_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "status" DROP CONSTRAINT "status_pkey",
DROP COLUMN "id_status",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ADD CONSTRAINT "status_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "truck" DROP CONSTRAINT "truck_pkey",
DROP COLUMN "id_truck",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "truck_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "id_role",
DROP COLUMN "id_user",
ADD COLUMN     "fk_role" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "is_enabled" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "register" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

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
