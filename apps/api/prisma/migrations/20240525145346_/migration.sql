/*
  Warnings:

  - Added the required column `url_thumbnail` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" ADD COLUMN     "url_thumbnail" TEXT NOT NULL;
