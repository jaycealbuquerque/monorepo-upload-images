-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_usersId_fkey";

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
