/*
  Warnings:

  - You are about to drop the column `purchased` on the `wishlists` table. All the data in the column will be lost.
  - You are about to drop the column `purchased_by` on the `wishlists` table. All the data in the column will be lost.
  - Changed the type of `product_id` on the `wishlists` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `username` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `wishlists` DROP COLUMN `purchased`,
    DROP COLUMN `purchased_by`,
    DROP COLUMN `product_id`,
    ADD COLUMN `product_id` JSON NOT NULL;
