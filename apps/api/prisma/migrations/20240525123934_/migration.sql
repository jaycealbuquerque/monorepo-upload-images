/*
  Warnings:

  - Added the required column `cep` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telenofe` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_cpf_key";

-- AlterTable
ALTER TABLE "images" ALTER COLUMN "usersId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL,
ADD COLUMN     "telenofe" TEXT NOT NULL;
