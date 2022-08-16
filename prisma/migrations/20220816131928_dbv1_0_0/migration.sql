/*
  Warnings:

  - You are about to drop the column `to_user_id` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `chat` table. All the data in the column will be lost.
  - You are about to drop the column `status_read` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the column `whislist_id` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the column `creator_id` on the `userwishlists` table. All the data in the column will be lost.
  - Added the required column `creator_id` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wishlist_id` to the `groups` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `chat` DROP FOREIGN KEY `chat_user_id_fkey`;

-- AlterTable
ALTER TABLE `chat` DROP COLUMN `to_user_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `text` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `groups` DROP COLUMN `status_read`,
    DROP COLUMN `user_id`,
    DROP COLUMN `whislist_id`,
    ADD COLUMN `creator_id` BIGINT NOT NULL,
    ADD COLUMN `wishlist_id` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `userwishlists` DROP COLUMN `creator_id`,
    MODIFY `purchased` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `purchased_by` JSON NULL;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `groups_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `groups_wishlist_id_fkey` FOREIGN KEY (`wishlist_id`) REFERENCES `wishlists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userchatgroups` ADD CONSTRAINT `userchatgroups_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userwishlists` ADD CONSTRAINT `userwishlists_wishlist_id_fkey` FOREIGN KEY (`wishlist_id`) REFERENCES `wishlists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
