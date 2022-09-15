-- AlterTable
ALTER TABLE `products` ADD COLUMN `images` JSON NULL,
    MODIFY `features` JSON NULL;
