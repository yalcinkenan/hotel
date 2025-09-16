-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server-Version:               8.0.43 - MySQL Community Server - GPL
-- Server-Betriebssystem:        Linux
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Exportiere Datenbank-Struktur für heartofthecityhotel
CREATE DATABASE IF NOT EXISTS `heartofthecityhotel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `heartofthecityhotel`;

-- Exportiere Struktur von Tabelle heartofthecityhotel.room
CREATE TABLE IF NOT EXISTS `room` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `available` bit(1) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `room_number` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportiere Daten aus Tabelle heartofthecityhotel.room: ~3 rows (ungefähr)
REPLACE INTO `room` (`id`, `available`, `price`, `room_number`, `type`) VALUES
	(1, b'1', 100, '101', 'Tek Kişilik'),
	(2, b'1', 150, '102', 'Çift Kişilik'),
	(3, b'0', 300, '103', 'Suit');

-- Exportiere Struktur von Tabelle heartofthecityhotel.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Exportiere Daten aus Tabelle heartofthecityhotel.user: ~2 rows (ungefähr)
REPLACE INTO `user` (`id`, `email`, `phone_number`, `username`) VALUES
	(1, 'ali@example.com', '5551234567', 'ali'),
	(2, 'ayse@example.com', '5559876543', 'ayse');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
