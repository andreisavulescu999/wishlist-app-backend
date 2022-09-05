/*
  Warnings:

  - Added the required column `group_id` to the `userchatgroups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creator_id` to the `userwishlists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userchatgroups` ADD COLUMN `group_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `userwishlists` ADD COLUMN `creator_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `userchatgroups` ADD CONSTRAINT `userchatgroups_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userwishlists` ADD CONSTRAINT `userwishlists_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
