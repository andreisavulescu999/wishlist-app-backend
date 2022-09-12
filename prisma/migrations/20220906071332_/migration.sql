/*
  Warnings:

  - You are about to drop the column `whislist_id` on the `userchatgroups` table. All the data in the column will be lost.
  - Added the required column `wishlist_id` to the `userchatgroups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userchatgroups` DROP COLUMN `whislist_id`,
    ADD COLUMN `wishlist_id` INTEGER NOT NULL;
