-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `userwishlists` DROP FOREIGN KEY `userwishlists_wishlist_id_fkey`;

-- AlterTable
ALTER TABLE `chat` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `groups` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `products` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `userchatgroups` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `userwishlists` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `wishlists` ALTER COLUMN `updated_at` DROP DEFAULT,
    MODIFY `product_id` JSON NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userwishlists` ADD CONSTRAINT `userwishlists_wishlist_id_fkey` FOREIGN KEY (`wishlist_id`) REFERENCES `wishlists`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
