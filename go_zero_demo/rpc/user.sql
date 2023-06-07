CREATE TABLE `zero_user` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
    `username` varchar(255) NOT NULL UNIQUE COMMENT 'username',
    `password` varchar(255) NOT NULL COMMENT 'password',
    `email` varchar(255) COMMENT 'email',
    PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4