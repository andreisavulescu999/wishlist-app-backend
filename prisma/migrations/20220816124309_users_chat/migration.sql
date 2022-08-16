-- AddForeignKey
ALTER TABLE `chat` ADD CONSTRAINT `chat_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
