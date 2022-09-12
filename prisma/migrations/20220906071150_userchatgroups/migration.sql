-- DropForeignKey
ALTER TABLE `userchatgroups` DROP FOREIGN KEY `userchatgroups_group_id_fkey`;

-- DropForeignKey
ALTER TABLE `userchatgroups` DROP FOREIGN KEY `userchatgroups_user_id_fkey`;

-- AlterTable
ALTER TABLE `userchatgroups` MODIFY `status_read` BOOLEAN NULL;

-- AddForeignKey
ALTER TABLE `userchatgroups` ADD CONSTRAINT `userchatgroups_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userchatgroups` ADD CONSTRAINT `userchatgroups_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
