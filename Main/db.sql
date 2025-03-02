-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 09, 2025 at 03:24 AM
-- Server version: 10.11.6-MariaDB-log
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `circlecodes_getpasto`
--

-- --------------------------------------------------------

--
-- Table structure for table `addons`
--

CREATE TABLE `addons` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`image`)),
  `price` double NOT NULL DEFAULT 0,
  `is_available` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database/migrations/1729090832531_create_roles_table', 1, '2025-01-08 19:09:17'),
(2, 'database/migrations/1729090832533_create_users_table', 1, '2025-01-08 19:09:18'),
(3, 'database/migrations/1729103421410_create_tokens_table', 1, '2025-01-08 19:09:18'),
(4, 'database/migrations/1729162217266_create_reservations_table', 1, '2025-01-08 19:09:18'),
(5, 'database/migrations/1729162247610_create_coupons_table', 1, '2025-01-08 19:09:18'),
(6, 'database/migrations/1729162303177_create_categories_table', 1, '2025-01-08 19:09:19'),
(7, 'database/migrations/1729162322441_create_addons_table', 1, '2025-01-08 19:09:19'),
(8, 'database/migrations/1729163648222_create_charges_table', 1, '2025-01-08 19:09:19'),
(9, 'database/migrations/1729163722448_create_schedules_table', 1, '2025-01-08 19:09:19'),
(10, 'database/migrations/1729163756012_create_menu_items_table', 1, '2025-01-08 19:09:20'),
(11, 'database/migrations/1729163815186_create_item_charges_table', 1, '2025-01-08 19:09:20'),
(12, 'database/migrations/1729163838230_create_item_addons_table', 1, '2025-01-08 19:09:20'),
(13, 'database/migrations/1729163852844_create_variants_table', 1, '2025-01-08 19:09:21'),
(14, 'database/migrations/1729163870857_create_variant_options_table', 1, '2025-01-08 19:09:21'),
(15, 'database/migrations/1729163900502_create_item_variants_table', 1, '2025-01-08 19:09:21'),
(16, 'database/migrations/1729187923658_create_remember_me_tokens_table', 1, '2025-01-08 19:09:22'),
(17, 'database/migrations/1729963149350_create_orders_table', 1, '2025-01-08 19:09:22'),
(18, 'database/migrations/1729963171067_create_order_items_table', 1, '2025-01-08 19:09:22'),
(19, 'database/migrations/1729963220285_create_order_charges_table', 1, '2025-01-08 19:09:23'),
(20, 'database/migrations/1730205293887_create_translations_table', 1, '2025-01-08 19:09:23'),
(21, 'database/migrations/1730207673120_create_settings_table', 1, '2025-01-08 19:09:23'),
(22, 'database/migrations/1730998111297_create_business_setups_table', 1, '2025-01-08 19:09:23'),
(23, 'database/migrations/1731521821026_create_notifications_table', 1, '2025-01-08 19:09:24'),
(24, 'database/migrations/1733510054161_create_promotions_table', 1, '2025-01-08 19:09:24'),
(25, 'database/migrations/1734165803870_create_payment_methods_table', 1, '2025-01-08 19:09:24');

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Table structure for table `business_setups`
--

CREATE TABLE `business_setups` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `country` varchar(255) NOT NULL DEFAULT 'US',
  `time_zone` varchar(255) DEFAULT 'UTC+06:00',
  `time_format` enum('12_format','24_format') NOT NULL DEFAULT '12_format',
  `maintenance_mode` tinyint(1) NOT NULL DEFAULT 0,
  `dine_in` tinyint(1) NOT NULL DEFAULT 1,
  `delivery` tinyint(1) NOT NULL DEFAULT 1,
  `pickup` tinyint(1) NOT NULL DEFAULT 1,
  `delivery_charge` double NOT NULL DEFAULT 0,
  `currency_code` varchar(255) NOT NULL DEFAULT 'USD',
  `currency_symbol_position` enum('left','right') NOT NULL DEFAULT 'right',
  `guest_checkout` tinyint(1) NOT NULL DEFAULT 0,
  `login_only_verified_email` tinyint(1) NOT NULL DEFAULT 0,
  `sort_categories` enum('priority_number','alphabetical_order') NOT NULL DEFAULT 'priority_number',
  `logo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`logo`)),
  `minimized_logo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`minimized_logo`)),
  `favicon` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`favicon`)),
  `theme` varchar(255) DEFAULT NULL,
  `company_slogan` text DEFAULT NULL,
  `copyright_text` text DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `about_us_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`about_us_image`)),
  `about_us_heading` text DEFAULT NULL,
  `about_us_description` text DEFAULT NULL,
  `contact_us_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`contact_us_image`)),
  `terms_and_conditions` text DEFAULT NULL,
  `privacy_policy` text DEFAULT NULL,
  `return_policy` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `business_setups`
--

INSERT INTO `business_setups` (`id`, `name`, `email`, `phone`, `address`, `country`, `time_zone`, `time_format`, `maintenance_mode`, `dine_in`, `delivery`, `pickup`, `delivery_charge`, `currency_code`, `currency_symbol_position`, `guest_checkout`, `login_only_verified_email`, `sort_categories`, `logo`, `minimized_logo`, `favicon`, `theme`, `company_slogan`, `copyright_text`, `facebook`, `instagram`, `twitter`, `about_us_image`, `about_us_heading`, `about_us_description`, `contact_us_image`, `terms_and_conditions`, `privacy_policy`, `return_policy`, `created_at`, `updated_at`) VALUES
(1, 'GetPasto', 'info@getpasto.com', '112345678', 'New York, US', 'US', 'UTC-05:00', '12_format', 0, 1, 1, 1, 10, 'USD', 'right', 1, 0, 'priority_number', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-01-08 19:09:23', '2025-01-08 19:13:40');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `priority` int(10) UNSIGNED NOT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`image`)),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `charges`
--

CREATE TABLE `charges` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` enum('tax','charge') DEFAULT 'charge',
  `amount` double NOT NULL DEFAULT 0,
  `amount_type` enum('percentage','amount') DEFAULT 'percentage',
  `is_available` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `type` enum('default','firstTimeUser') DEFAULT 'default',
  `discount_type` enum('percentage','amount') DEFAULT 'percentage',
  `discount` double NOT NULL DEFAULT 0,
  `max_usage` int(11) NOT NULL DEFAULT 1,
  `min_purchase` double DEFAULT NULL,
  `max_discount` double DEFAULT NULL,
  `usage_count` int(11) NOT NULL DEFAULT 0,
  `cost_used` double NOT NULL DEFAULT 0,
  `valid_from` timestamp NOT NULL,
  `valid_until` timestamp NOT NULL,
  `is_available` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_addons`
--

CREATE TABLE `item_addons` (
  `id` int(10) UNSIGNED NOT NULL,
  `menu_item_id` int(10) UNSIGNED DEFAULT NULL,
  `addon_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_charges`
--

CREATE TABLE `item_charges` (
  `id` int(10) UNSIGNED NOT NULL,
  `menu_item_id` int(10) UNSIGNED DEFAULT NULL,
  `charge_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_variants`
--

CREATE TABLE `item_variants` (
  `id` int(10) UNSIGNED NOT NULL,
  `menu_item_id` int(10) UNSIGNED DEFAULT NULL,
  `variant_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `food_type` enum('veg','nonVeg') DEFAULT NULL,
  `price` double NOT NULL DEFAULT 0,
  `discount` double NOT NULL DEFAULT 0,
  `discount_type` enum('percentage','amount') DEFAULT 'percentage',
  `is_available` tinyint(1) DEFAULT 1,
  `is_recommended` tinyint(1) DEFAULT 0,
  `image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`image`)),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` varchar(255) NOT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `is_system` tinyint(1) DEFAULT 0,
  `navigate` varchar(255) DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_number` varchar(255) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `type` enum('dine_in','delivery','pickup') DEFAULT NULL,
  `total_quantity` int(11) NOT NULL DEFAULT 0,
  `total` double NOT NULL DEFAULT 0,
  `total_tax` double NOT NULL DEFAULT 0,
  `total_charges` double NOT NULL DEFAULT 0,
  `discount` double NOT NULL DEFAULT 0,
  `manual_discount` double NOT NULL DEFAULT 0,
  `delivery_charge` double NOT NULL DEFAULT 0,
  `grand_total` double NOT NULL DEFAULT 0,
  `payment_type` enum('card','cash','paypal','stripe') DEFAULT 'cash',
  `payment_status` tinyint(1) DEFAULT 0,
  `payment_info` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`payment_info`)),
  `customer_note` text DEFAULT NULL,
  `status` enum('pending','processing','ready','on_delivery','completed','canceled','failed') DEFAULT 'pending',
  `delivery_date` timestamp NULL DEFAULT NULL,
  `delivery_man_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_charges`
--

CREATE TABLE `order_charges` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` enum('tax','charge') DEFAULT 'charge',
  `amount` double NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `menu_item_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` double NOT NULL DEFAULT 0,
  `variants` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`variants`)),
  `addons` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`addons`)),
  `charges` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`charges`)),
  `variants_amount` double NOT NULL DEFAULT 0,
  `addons_amount` double NOT NULL DEFAULT 0,
  `tax_amount` double NOT NULL DEFAULT 0,
  `charge_amount` double NOT NULL DEFAULT 0,
  `discount_amount` double NOT NULL DEFAULT 0,
  `total_price` double NOT NULL DEFAULT 0,
  `quantity` int(11) DEFAULT 0,
  `grand_price` double NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `key` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT 0,
  `logo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`logo`)),
  `public` text DEFAULT NULL,
  `secret` text DEFAULT NULL,
  `webhook` text DEFAULT NULL,
  `mode` text DEFAULT NULL,
  `currencies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`currencies`)),
  `countries` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`countries`)),
  `extra_params` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`extra_params`)),
  `config` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`config`)),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `name`, `key`, `status`, `logo`, `public`, `secret`, `webhook`, `mode`, `currencies`, `countries`, `extra_params`, `config`, `created_at`, `updated_at`) VALUES
(1, 'Paypal', 'paypal', 1, NULL, 'AZX7j1pULNFTPdwTTqlyE8QxOr8nIkcl-i-Abc6wNMG3UsoRfyFfnRD_GWJZkELTgIMyeTSItBNt5UwN', 'EGl8Gf1jxcZVakbIeNGN-kA9cuKJfFAVb1cGbsAs8XI2M8RSqOaLxNVHs7HxC_v2yLRHRXP-GL-rtXgw', '1FK083318B6705748', 'sandbox', '[\"AUD\",\"BRL\",\"CAD\",\"CNY\",\"CZK\",\"DKK\",\"EUR\",\"HKD\",\"HUF\",\"ILS\",\"JPY\",\"MYR\",\"MXN\",\"TWD\",\"NZD\",\"NOK\",\"PHP\",\"PLN\",\"GBP\",\"SGD\",\"SEK\",\"CHF\",\"THB\",\"USD\"]', '[\"US\",\"CA\",\"GB\",\"AU\",\"FR\",\"DE\",\"IT\",\"JP\",\"MX\",\"BR\",\"IN\",\"CN\",\"ZA\",\"RU\",\"KR\",\"NL\",\"ES\",\"SG\",\"HK\",\"SE\",\"CH\",\"BE\",\"NO\",\"DK\",\"FI\",\"AT\",\"IE\",\"PL\",\"PT\",\"GR\",\"CZ\",\"HU\",\"SK\",\"CY\",\"LU\",\"MT\",\"IS\",\"LI\"]', NULL, '{\"fields\":[{\"label\":\"Client ID\",\"name\":\"public\",\"required\":true,\"type\":\"text\"},{\"label\":\"Client Secret\",\"name\":\"secret\",\"required\":true,\"type\":\"text\"},{\"label\":\"Webhook Id\",\"name\":\"webhook\",\"required\":true,\"type\":\"text\"},{\"label\":\"Sandbox Mode\",\"name\":\"mode\",\"required\":true,\"type\":\"radio_group\",\"options\":[{\"label\":\"Sandbox\",\"value\":\"sandbox\"},{\"label\":\"Live\",\"value\":\"live\"}]}]}', '2025-01-08 19:09:15', '2025-01-08 19:09:15'),
(2, 'Stripe', 'stripe', 1, NULL, 'pk_test_51QQnVAJlHJAKjQLuoTo1zqpBvJnWk1feSue3NgutMcZBUJ8o03EKDIYwOKsT6iszJ1cpnUp2caRUvWQUB937aW6z00zyUuC8i3', 'sk_test_51QQnVAJlHJAKjQLutJpuKas2HqnmH7v73QT6N7RPvVRP2BHjA0z2NOxyUIwMyBPi6dzUrzhlXfwfzue4jo5T6tAo00luXvEtHR', 'whsec_M1IoI4RBjKKBCloOlKSYjsdPuVMApKKe', NULL, '[\"USD\",\"AED\",\"AFN\",\"ALL\",\"AMD\",\"ANG\",\"AOA\",\"ARS\",\"AUD\",\"AWG\",\"AZN\",\"BAM\",\"BBD\",\"BDT\",\"BGN\",\"BIF\",\"BMD\",\"BND\",\"BOB\",\"BRL\",\"BSD\",\"BWP\",\"BYN\",\"BZD\",\"CAD\",\"CDF\",\"CHF\",\"CLP\",\"CNY\",\"COP\",\"CRC\",\"CVE\",\"CZK\",\"DJF\",\"DKK\",\"DOP\",\"DZD\",\"EGP\",\"ETB\",\"EUR\",\"FJD\",\"FKP\",\"GBP\",\"GEL\",\"GIP\",\"GMD\",\"GNF\",\"GTQ\",\"GYD\",\"HKD\",\"HNL\",\"HTG\",\"HUF\",\"IDR\",\"ILS\",\"INR\",\"ISK\",\"JMD\",\"JPY\",\"KES\",\"KGS\",\"KHR\",\"KMF\",\"KRW\",\"KYD\",\"KZT\",\"LAK\",\"LBP\",\"LKR\",\"LRD\",\"LSL\",\"MAD\",\"MDL\",\"MGA\",\"MKD\",\"MMK\",\"MNT\",\"MOP\",\"MUR\",\"MVR\",\"MWK\",\"MXN\",\"MYR\",\"MZN\",\"NAD\",\"NGN\",\"NIO\",\"NOK\",\"NPR\",\"NZD\",\"PAB\",\"PEN\",\"PGK\",\"PHP\",\"PKR\",\"PLN\",\"PYG\",\"QAR\",\"RON\",\"RSD\",\"RUB\",\"RWF\",\"SAR\",\"SBD\",\"SCR\",\"SEK\",\"SGD\",\"SHP\",\"SLE\",\"SOS\",\"SRD\",\"STD\",\"SZL\",\"THB\",\"TJS\",\"TOP\",\"TRY\",\"TTD\",\"TWD\",\"TZS\",\"UAH\",\"UGX\",\"UYU\",\"UZS\",\"VND\",\"VUV\",\"WST\",\"XAF\",\"XCD\",\"XOF\",\"XPF\",\"YER\",\"ZAR\",\"ZMW\"]', '[\"US\",\"CA\",\"GB\",\"AU\",\"AT\",\"BE\",\"BG\",\"CY\",\"CZ\",\"DK\",\"EE\",\"FI\",\"FR\",\"DE\",\"GR\",\"HK\",\"HU\",\"IS\",\"IE\",\"IT\",\"JP\",\"LV\",\"LI\",\"LT\",\"LU\",\"MT\",\"MX\",\"NL\",\"NZ\",\"NO\",\"PL\",\"PT\",\"RO\",\"SG\",\"SK\",\"SI\",\"ES\",\"SE\",\"CH\",\"AE\"]', NULL, '{\"fields\":[{\"label\":\"Public Key\",\"name\":\"public\",\"required\":true,\"type\":\"text\"},{\"label\":\"Secret Key\",\"name\":\"secret\",\"required\":true,\"type\":\"text\"},{\"label\":\"Webhook Secret\",\"name\":\"webhook\",\"required\":true,\"type\":\"text\"}]}', '2025-01-08 19:09:15', '2025-01-08 19:09:15');

-- --------------------------------------------------------

--
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` enum('slider','welcome','message') NOT NULL DEFAULT 'slider',
  `slider_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`slider_image`)),
  `welcome_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`welcome_image`)),
  `welcome_status` tinyint(1) DEFAULT 0,
  `message` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `promotions`
--

INSERT INTO `promotions` (`id`, `type`, `slider_image`, `welcome_image`, `welcome_status`, `message`, `created_at`, `updated_at`) VALUES
(1, 'welcome', NULL, NULL, 0, NULL, '2025-01-08 19:09:24', '2025-01-08 19:09:24'),
(2, 'message', NULL, NULL, 0, NULL, '2025-01-08 19:09:24', '2025-01-08 19:09:24');

-- --------------------------------------------------------

--
-- Table structure for table `remember_me_tokens`
--

CREATE TABLE `remember_me_tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `tokenable_id` int(10) UNSIGNED NOT NULL,
  `hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  `expires_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(10) UNSIGNED NOT NULL,
  `reservation_date` timestamp NOT NULL,
  `reservation_note` text DEFAULT NULL,
  `number_of_people` int(11) NOT NULL DEFAULT 1,
  `table_number` varchar(255) NOT NULL,
  `start_time` varchar(255) NOT NULL,
  `end_time` varchar(255) NOT NULL,
  `status` enum('booked','cancelled','completed') DEFAULT 'booked',
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '2025-01-08 19:09:17', '2025-01-08 19:09:17'),
(2, 'Manager', '2025-01-08 19:09:17', '2025-01-08 19:09:17'),
(3, 'POS', '2025-01-08 19:09:17', '2025-01-08 19:09:17'),
(4, 'Display', '2025-01-08 19:09:17', '2025-01-08 19:09:17'),
(5, 'Kitchen', '2025-01-08 19:09:17', '2025-01-08 19:09:17'),
(6, 'Customer', '2025-01-08 19:09:17', '2025-01-08 19:09:17'),
(7, 'Delivery', '2025-01-08 19:09:17', '2025-01-08 19:09:17');

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` int(10) UNSIGNED NOT NULL,
  `day` varchar(15) NOT NULL,
  `is_open` tinyint(1) DEFAULT 1,
  `opening_time` time DEFAULT NULL,
  `closing_time` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`id`, `day`, `is_open`, `opening_time`, `closing_time`, `created_at`, `updated_at`) VALUES
(1, 'SATURDAY', 1, '09:00:00', '23:00:00', '2025-01-08 19:09:19', '2025-01-08 19:14:42'),
(2, 'SUNDAY', 1, '09:00:00', '23:00:00', '2025-01-08 19:09:19', '2025-01-08 19:14:56'),
(3, 'MONDAY', 1, '09:00:00', '23:00:00', '2025-01-08 19:09:19', '2025-01-08 19:15:07'),
(4, 'TUESDAY', 1, '09:00:00', '23:00:00', '2025-01-08 19:09:19', '2025-01-08 19:15:21'),
(5, 'WEDNESDAY', 1, '09:00:00', '23:00:00', '2025-01-08 19:09:19', '2025-01-08 19:15:50'),
(6, 'THRUSDAY', 1, '09:00:00', '23:00:00', '2025-01-08 19:09:19', '2025-01-08 19:18:09'),
(7, 'FRIDAY', 1, '09:00:00', '23:00:00', '2025-01-08 19:09:19', '2025-01-08 19:18:13');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT 0,
  `value_1` varchar(255) DEFAULT NULL,
  `value_2` varchar(255) DEFAULT NULL,
  `value_3` text DEFAULT NULL,
  `value_4` text DEFAULT NULL,
  `value_5` text DEFAULT NULL,
  `value_6` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`value_6`)),
  `file` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`file`)),
  `file_2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`file_2`)),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `status`, `value_1`, `value_2`, `value_3`, `value_4`, `value_5`, `value_6`, `file`, `file_2`, `created_at`, `updated_at`) VALUES
(1, 'branding', 0, 'https://getpasto.abidr.me', NULL, NULL, NULL, '[{\"code\":\"en\",\"name\":\"English\"}]', NULL, NULL, NULL, '2025-01-08 19:09:16', '2025-01-08 19:12:56'),
(2, 'theme', 0, NULL, NULL, NULL, NULL, '{\"default\":{}}', NULL, NULL, NULL, '2025-01-08 19:09:16', '2025-01-08 19:09:16'),
(3, 'cash', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-01-08 19:09:16', '2025-01-08 19:09:16'),
(4, 'card', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-01-08 19:09:16', '2025-01-08 19:09:16'),
(5, 'digital', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-01-08 19:09:16', '2025-01-08 19:09:16');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `type` varchar(50) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `translations`
--

CREATE TABLE `translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `code` varchar(255) NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `translations`
--

INSERT INTO `translations` (`id`, `code`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'en', 'Search', 'Search', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(2, 'en', 'Login', 'Login', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(3, 'en', 'View all food items', 'View all food items', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(4, 'en', 'Sign Up', 'Sign Up', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(5, 'en', 'Select order type', 'Select order type', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(6, 'en', 'ITEMS', 'ITEMS', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(7, 'en', 'QTY', 'QTY', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(8, 'en', 'product 2', 'product 2', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(9, 'en', 'Variants', 'Variants', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(10, 'en', 'Subtotal', 'Subtotal', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(11, 'en', 'Addons', 'Addons', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(12, 'en', 'TOTAL', 'TOTAL', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(13, 'en', 'PRICE', 'PRICE', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(14, 'en', 'Mustard mayonnaise', 'Mustard mayonnaise', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(15, 'en', 'GST', 'GST', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(16, 'en', 'Service charge', 'Service charge', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(17, 'en', 'Very Spicy', 'Very Spicy', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(18, 'en', 'VAT', 'VAT', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(19, 'en', 'QTY: ', 'QTY: ', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(20, 'en', 'right arrow', 'right arrow', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(21, 'en', 'Latest additions', 'Latest additions', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(22, 'en', 'Total', 'Total', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(23, 'en', 'CLOSE', 'CLOSE', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(24, 'en', 'Write a note for the order...', 'Write a note for the order...', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(25, 'en', 'Order note', 'Order note', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(26, 'en', 'About us', 'About us', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(27, 'en', 'Return policy', 'Return policy', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(28, 'en', 'Delivery Charge', 'Delivery Charge', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(29, 'en', 'CHECKOUT', 'CHECKOUT', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(30, 'en', 'Contact us', 'Contact us', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(31, 'en', 'Privacy policy', 'Privacy policy', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(32, 'en', 'left arrow', 'left arrow', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(33, 'en', 'Terms and conditions', 'Terms and conditions', '2025-01-08 19:09:44', '2025-01-08 19:09:44'),
(34, 'en', 'Delivery', 'Delivery', '2025-01-08 19:09:47', '2025-01-08 19:09:47'),
(35, 'en', 'Pick-up', 'Pick-up', '2025-01-08 19:09:47', '2025-01-08 19:09:47'),
(36, 'en', 'This Week', 'This Week', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(37, 'en', 'Dashboard', 'Dashboard', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(38, 'en', 'Hello', 'Hello', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(39, 'en', 'Today', 'Today', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(40, 'en', 'Order analytics', 'Order analytics', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(41, 'en', 'Lifetime', 'Lifetime', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(42, 'en', 'This Month', 'This Month', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(43, 'en', 'Pending', 'Pending', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(44, 'en', 'Failed', 'Failed', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(45, 'en', 'Today is', 'Today is', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(46, 'en', 'Recent Reservations', 'Recent Reservations', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(47, 'en', 'Processing', 'Processing', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(48, 'en', 'On Delivery', 'On Delivery', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(49, 'en', 'Ready', 'Ready', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(50, 'en', 'Completed', 'Completed', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(51, 'en', 'Cancelled', 'Cancelled', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(52, 'en', 'Recent Orders', 'Recent Orders', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(53, 'en', 'POS', 'POS', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(54, 'en', 'Order status', 'Order status', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(55, 'en', 'Menu items', 'Menu items', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(56, 'en', 'Categories', 'Categories', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(57, 'en', 'Active orders', 'Active orders', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(58, 'en', 'Reservation history', 'Reservation history', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(59, 'en', 'Order history', 'Order history', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(60, 'en', 'Active reservations', 'Active reservations', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(61, 'en', 'Tax and charges', 'Tax and charges', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(62, 'en', 'Order management', 'Order management', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(63, 'en', 'Reservation', 'Reservation', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(64, 'en', 'Order report', 'Order report', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(65, 'en', 'Add-on items', 'Add-on items', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(66, 'en', 'System', 'System', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(67, 'en', 'User management', 'User management', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(68, 'en', 'Customers', 'Customers', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(69, 'en', 'Languages', 'Languages', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(70, 'en', 'Promotions', 'Promotions', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(71, 'en', 'Profile', 'Profile', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(72, 'en', 'Settings', 'Settings', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(73, 'en', 'Logout', 'Logout', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(74, 'en', 'Notifications', 'Notifications', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(75, 'en', 'Notification', 'Notification', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(76, 'en', 'Password', 'Password', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(77, 'en', 'Earning report', 'Earning report', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(78, 'en', 'Delivery person', 'Delivery person', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(79, 'en', 'Thursday', 'Thursday', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(80, 'en', 'Employees', 'Employees', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(81, 'en', 'Toggle', 'Toggle', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(82, 'en', 'Total Sale', 'Total Sale', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(83, 'en', 'Report and analysis', 'Report and analysis', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(84, 'en', 'Total Orders', 'Total Orders', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(85, 'en', 'Menu management', 'Menu management', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(86, 'en', 'Showing result for', 'Showing result for', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(87, 'en', 'Customer view', 'Customer view', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(88, 'en', 'Profile information', 'Profile information', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(89, 'en', 'Mark all as read', 'Mark all as read', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(90, 'en', 'Payment Methods', 'Payment Methods', '2025-01-08 19:10:00', '2025-01-08 19:10:00'),
(91, 'en', 'No notifications found', 'No notifications found', '2025-01-08 19:10:01', '2025-01-08 19:10:01'),
(92, 'en', 'No data found!', 'No data found!', '2025-01-08 19:10:01', '2025-01-08 19:10:01'),
(93, 'en', 'Theme Colors', 'Theme Colors', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(94, 'en', 'Open Hours', 'Open Hours', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(95, 'en', 'Platform Setup', 'Platform Setup', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(96, 'en', 'Business Info', 'Business Info', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(97, 'en', 'Site Settings', 'Site Settings', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(98, 'en', 'Primary', 'Primary', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(99, 'en', 'Red', 'Red', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(100, 'en', 'Teal', 'Teal', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(101, 'en', 'Purple', 'Purple', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(102, 'en', 'Blue', 'Blue', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(103, 'en', 'Green', 'Green', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(104, 'en', 'Secondary', 'Secondary', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(105, 'en', 'Cyan', 'Cyan', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(106, 'en', 'Update', 'Update', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(107, 'en', 'Reset', 'Reset', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(108, 'en', 'Pink', 'Pink', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(109, 'en', 'Name', 'Name', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(110, 'en', 'Name of your company/business', 'Name of your company/business', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(111, 'en', 'Site URL', 'Site URL', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(112, 'en', 'https:// example.com', 'https:// example.com', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(113, 'en', 'Email address', 'Email address', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(114, 'en', 'Phone', 'Phone', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(115, 'en', 'Enter company email address', 'Enter company email address', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(116, 'en', 'Enter phone number', 'Enter phone number', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(117, 'en', 'Enter address', 'Enter address', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(118, 'en', 'Search country', 'Search country', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(119, 'en', 'Time zone', 'Time zone', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(120, 'en', 'Select timezone', 'Select timezone', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(121, 'en', 'Search timezone', 'Search timezone', '2025-01-08 19:10:07', '2025-01-08 19:10:07'),
(122, 'en', '24 hour', '24 hour', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(123, 'en', '12 hour', '12 hour', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(124, 'en', 'Time format', 'Time format', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(125, 'en', 'Accepted order types', 'Accepted order types', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(126, 'en', 'Currency symbol position', 'Currency symbol position', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(127, 'en', 'Select currency', 'Select currency', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(128, 'en', 'Guest checkout', 'Guest checkout', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(129, 'en', 'Maintenance mode', 'Maintenance mode', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(130, 'en', 'Customer email verification', 'Customer email verification', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(131, 'en', 'Dine In', 'Dine In', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(132, 'en', 'Sort POS categories by', 'Sort POS categories by', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(133, 'en', 'The app and the website will be temporarily unavailable for customers and other users. Only admin panel will remain accessible.', 'The app and the website will be temporarily unavailable for customers and other users. Only admin panel will remain accessible.', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(134, 'en', 'Changing the currency will only update the currency symbol (e.g., $, €, £) but will not convert the actual currency values. Please ensure this is your intended action before proceeding.', 'Changing the currency will only update the currency symbol (e.g., $, €, £) but will not convert the actual currency values. Please ensure this is your intended action before proceeding.', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(135, 'en', 'AED', 'AED', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(136, 'en', 'AOA', 'AOA', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(137, 'en', 'AMD', 'AMD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(138, 'en', 'AUD', 'AUD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(139, 'en', 'ARS', 'ARS', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(140, 'en', 'AZN', 'AZN', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(141, 'en', 'ANG', 'ANG', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(142, 'en', 'ALL', 'ALL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(143, 'en', 'Pickup', 'Pickup', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(144, 'en', 'AWG', 'AWG', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(145, 'en', 'BDT', 'BDT', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(146, 'en', 'Search currency', 'Search currency', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(147, 'en', 'AFN', 'AFN', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(148, 'en', 'BGN', 'BGN', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(149, 'en', 'BAM', 'BAM', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(150, 'en', 'BHD', 'BHD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(151, 'en', 'BYR', 'BYR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(152, 'en', 'BTN', 'BTN', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(153, 'en', 'BND', 'BND', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(154, 'en', 'BZD', 'BZD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(155, 'en', 'CHF', 'CHF', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(156, 'en', 'BIF', 'BIF', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(157, 'en', 'CNY', 'CNY', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(158, 'en', 'DKK', 'DKK', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(159, 'en', 'CVE', 'CVE', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(160, 'en', 'CUC', 'CUC', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(161, 'en', 'DZD', 'DZD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(162, 'en', 'EEK', 'EEK', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(163, 'en', 'ERN', 'ERN', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(164, 'en', 'ETB', 'ETB', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(165, 'en', 'GEL', 'GEL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(166, 'en', 'GBP', 'GBP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(167, 'en', 'BMD', 'BMD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(168, 'en', 'BBD', 'BBD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(169, 'en', 'BSD', 'BSD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(170, 'en', 'BRL', 'BRL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(171, 'en', 'CDF', 'CDF', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(172, 'en', 'CRC', 'CRC', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(173, 'en', 'EGP', 'EGP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(174, 'en', 'DOP', 'DOP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(175, 'en', 'FKP', 'FKP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(176, 'en', 'GNF', 'GNF', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(177, 'en', 'FJD', 'FJD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(178, 'en', 'HRK', 'HRK', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(179, 'en', 'GYD', 'GYD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(180, 'en', 'HUF', 'HUF', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(181, 'en', 'IDR', 'IDR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(182, 'en', 'ILS', 'ILS', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(183, 'en', 'BOB', 'BOB', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(184, 'en', 'JPY', 'JPY', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(185, 'en', 'JOD', 'JOD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(186, 'en', 'IQD', 'IQD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(187, 'en', 'CLP', 'CLP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(188, 'en', 'KGS', 'KGS', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(189, 'en', 'CAD', 'CAD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(190, 'en', 'BWP', 'BWP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(191, 'en', 'DJF', 'DJF', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(192, 'en', 'EUR', 'EUR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(193, 'en', 'ISK', 'ISK', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(194, 'en', 'CZK', 'CZK', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(195, 'en', 'HKD', 'HKD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(196, 'en', 'INR', 'INR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(197, 'en', 'JMD', 'JMD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(198, 'en', 'HNL', 'HNL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(199, 'en', 'GQE', 'GQE', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(200, 'en', 'GHS', 'GHS', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(201, 'en', 'KES', 'KES', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(202, 'en', 'COP', 'COP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(203, 'en', 'GMD', 'GMD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(204, 'en', 'GIP', 'GIP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(205, 'en', 'HTG', 'HTG', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(206, 'en', 'GTQ', 'GTQ', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(207, 'en', 'IRR', 'IRR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(208, 'en', 'KHR', 'KHR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(209, 'en', 'KMF', 'KMF', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(210, 'en', 'KWD', 'KWD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(211, 'en', 'KRW', 'KRW', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(212, 'en', 'KPW', 'KPW', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(213, 'en', 'KYD', 'KYD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(214, 'en', 'KZT', 'KZT', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(215, 'en', 'LAK', 'LAK', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(216, 'en', 'LBP', 'LBP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(217, 'en', 'LKR', 'LKR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(218, 'en', 'LRD', 'LRD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(219, 'en', 'LSL', 'LSL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(220, 'en', 'LTL', 'LTL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(221, 'en', 'LVL', 'LVL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(222, 'en', 'LYD', 'LYD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(223, 'en', 'MAD', 'MAD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(224, 'en', 'MDL', 'MDL', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(225, 'en', 'MGA', 'MGA', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(226, 'en', 'MKD', 'MKD', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(227, 'en', 'MMK', 'MMK', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(228, 'en', 'MNT', 'MNT', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(229, 'en', 'MOP', 'MOP', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(230, 'en', 'MRO', 'MRO', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(231, 'en', 'MUR', 'MUR', '2025-01-08 19:10:08', '2025-01-08 19:10:08'),
(232, 'en', 'MVR', 'MVR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(233, 'en', 'MWK', 'MWK', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(234, 'en', 'MXN', 'MXN', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(235, 'en', 'MYR', 'MYR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(236, 'en', 'MZM', 'MZM', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(237, 'en', 'NAD', 'NAD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(238, 'en', 'NGN', 'NGN', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(239, 'en', 'NIO', 'NIO', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(240, 'en', 'NOK', 'NOK', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(241, 'en', 'NPR', 'NPR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(242, 'en', 'NZD', 'NZD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(243, 'en', 'OMR', 'OMR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(244, 'en', 'PAB', 'PAB', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(245, 'en', 'PEN', 'PEN', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(246, 'en', 'PGK', 'PGK', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(247, 'en', 'PHP', 'PHP', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(248, 'en', 'PKR', 'PKR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(249, 'en', 'PLN', 'PLN', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(250, 'en', 'PYG', 'PYG', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(251, 'en', 'RON', 'RON', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(252, 'en', 'QAR', 'QAR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(253, 'en', 'RSD', 'RSD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(254, 'en', 'RUB', 'RUB', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(255, 'en', 'SAR', 'SAR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(256, 'en', 'SBD', 'SBD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(257, 'en', 'SCR', 'SCR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(258, 'en', 'SDG', 'SDG', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(259, 'en', 'SEK', 'SEK', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(260, 'en', 'SHP', 'SHP', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(261, 'en', 'SLL', 'SLL', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(262, 'en', 'SGD', 'SGD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(263, 'en', 'SOS', 'SOS', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(264, 'en', 'SRD', 'SRD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(265, 'en', 'SZL', 'SZL', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(266, 'en', 'SYP', 'SYP', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(267, 'en', 'THB', 'THB', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(268, 'en', 'TJS', 'TJS', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(269, 'en', 'TMT', 'TMT', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(270, 'en', 'TND', 'TND', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(271, 'en', 'TRY', 'TRY', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(272, 'en', 'TTD', 'TTD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(273, 'en', 'TWD', 'TWD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(274, 'en', 'TZS', 'TZS', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(275, 'en', 'UAH', 'UAH', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(276, 'en', 'UGX', 'UGX', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(277, 'en', 'USD', 'USD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(278, 'en', 'UZS', 'UZS', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(279, 'en', 'UYU', 'UYU', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(280, 'en', 'VEB', 'VEB', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(281, 'en', 'VND', 'VND', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(282, 'en', 'WST', 'WST', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(283, 'en', 'VUV', 'VUV', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(284, 'en', 'XAF', 'XAF', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(285, 'en', 'XCD', 'XCD', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(286, 'en', 'XDR', 'XDR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(287, 'en', 'XOF', 'XOF', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(288, 'en', 'XPF', 'XPF', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(289, 'en', 'YER', 'YER', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(290, 'en', 'ZAR', 'ZAR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(291, 'en', 'ZMK', 'ZMK', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(292, 'en', 'ZWR', 'ZWR', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(293, 'en', 'Right', 'Right', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(294, 'en', 'Left', 'Left', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(295, 'en', 'Allow creating orders without customer account', 'Allow creating orders without customer account', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(296, 'en', 'Allow access only to customers with a verified email', 'Allow access only to customers with a verified email', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(297, 'en', 'Priority number', 'Priority number', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(298, 'en', 'Alphabetical order', 'Alphabetical order', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(299, 'en', 'Global', 'Global', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(300, 'en', 'About us page', 'About us page', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(301, 'en', 'Contact us page', 'Contact us page', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(302, 'en', 'Address', 'Address', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(303, 'en', 'Terms & Conditions', 'Terms & Conditions', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(304, 'en', 'Website favicon', 'Website favicon', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(305, 'en', 'Max file size is 500kb. Supported file types are .jpg and .png.', 'Max file size is 500kb. Supported file types are .jpg and .png.', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(306, 'en', 'Drag and drop files here or', 'Drag and drop files here or', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(307, 'en', 'upload', 'upload', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(308, 'en', 'Minimized logo', 'Minimized logo', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(309, 'en', 'Company logo', 'Company logo', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(310, 'en', 'Copyright text', 'Copyright text', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(311, 'en', 'Write here', 'Write here', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(312, 'en', 'Company slogan/Short description', 'Company slogan/Short description', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(313, 'en', 'Enter copyright text', 'Enter copyright text', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(314, 'en', 'Facebook', 'Facebook', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(315, 'en', 'Enter facebook page url', 'Enter facebook page url', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(316, 'en', 'Instagram', 'Instagram', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(317, 'en', 'Enter instagram page url', 'Enter instagram page url', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(318, 'en', 'X (Twitter)', 'X (Twitter)', '2025-01-08 19:10:09', '2025-01-08 19:10:09'),
(319, 'en', 'Enter x page url', 'Enter x page url', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(320, 'en', 'Image', 'Image', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(321, 'en', 'Heading', 'Heading', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(322, 'en', 'Enter about us heading', 'Enter about us heading', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(323, 'en', 'Description', 'Description', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(324, 'en', 'Open', 'Open', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(325, 'en', 'Opening time', 'Opening time', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(326, 'en', 'Days', 'Days', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(327, 'en', 'Closing time', 'Closing time', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(328, 'en', 'Select time', 'Select time', '2025-01-08 19:10:10', '2025-01-08 19:10:10'),
(329, 'en', 'Phone number is required', 'Phone number is required', '2025-01-08 19:10:11', '2025-01-08 19:10:11'),
(330, 'en', 'Address is required', 'Address is required', '2025-01-08 19:10:11', '2025-01-08 19:10:11'),
(331, 'en', 'Email is required', 'Email is required', '2025-01-08 19:10:11', '2025-01-08 19:10:11'),
(332, 'en', 'Invalid email format', 'Invalid email format', '2025-01-08 19:10:20', '2025-01-08 19:10:20'),
(333, 'en', 'The siteUrl field must be a valid URL', 'The siteUrl field must be a valid URL', '2025-01-08 19:12:06', '2025-01-08 19:12:06'),
(334, 'en', 'Schedule updated!', 'Schedule updated!', '2025-01-08 19:14:28', '2025-01-08 19:14:28'),
(335, 'en', 'Manage languages', 'Manage languages', '2025-01-08 19:19:07', '2025-01-08 19:19:07'),
(336, 'en', 'Enter language name', 'Enter language name', '2025-01-08 19:19:07', '2025-01-08 19:19:07'),
(337, 'en', 'Save', 'Save', '2025-01-08 19:19:07', '2025-01-08 19:19:07'),
(338, 'en', 'Enter language code', 'Enter language code', '2025-01-08 19:19:07', '2025-01-08 19:19:07'),
(339, 'en', 'Add New language', 'Add New language', '2025-01-08 19:19:07', '2025-01-08 19:19:07'),
(340, 'en', 'Welcome', 'Welcome', '2025-01-08 19:21:24', '2025-01-08 19:21:24'),
(341, 'en', 'Sign up or sign in to continue', 'Sign up or sign in to continue', '2025-01-08 19:21:24', '2025-01-08 19:21:24'),
(342, 'en', 'Email', 'Email', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(343, 'en', 'Forgot password?', 'Forgot password?', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(344, 'en', 'Enter your email', 'Enter your email', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(345, 'en', 'Enter password', 'Enter password', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(346, 'en', 'Remember me', 'Remember me', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(347, 'en', 'Enter your first name', 'Enter your first name', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(348, 'en', 'Enter your last name', 'Enter your last name', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(349, 'en', 'Enter your phone', 'Enter your phone', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(350, 'en', 'Enter your address', 'Enter your address', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(351, 'en', 'Re-enter password', 'Re-enter password', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(352, 'en', 'Password is required', 'Password is required', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(353, 'en', 'Last name is required', 'Last name is required', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(354, 'en', 'Confirm password is required', 'Confirm password is required', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(355, 'en', 'First name is required', 'First name is required', '2025-01-08 19:21:25', '2025-01-08 19:21:25'),
(356, 'en', 'Email status', 'Email status', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(357, 'en', 'Unverified', 'Unverified', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(358, 'en', 'Filter', 'Filter', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(359, 'en', 'Active', 'Active', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(360, 'en', 'Clear', 'Clear', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(361, 'en', 'Create new employee', 'Create new employee', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(362, 'en', 'Verified', 'Verified', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(363, 'en', 'Suspended', 'Suspended', '2025-01-08 19:21:34', '2025-01-08 19:21:34'),
(364, 'en', 'SL', 'SL', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(365, 'en', 'Role', 'Role', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(366, 'en', 'Acc. Status', 'Acc. Status', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(367, 'en', 'Customer name', 'Customer name', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(368, 'en', 'Contact number', 'Contact number', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(369, 'en', 'Admin', 'Admin', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(370, 'en', 'you', 'you', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(371, 'en', 'Actions', 'Actions', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(372, 'en', 'View', 'View', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(373, 'en', 'Delivery person name', 'Delivery person name', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(374, 'en', 'Edit', 'Edit', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(375, 'en', 'Copy', 'Copy', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(376, 'en', 'POS Operator', 'POS Operator', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(377, 'en', 'Edit employee', 'Edit employee', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(378, 'en', 'Kitchen', 'Kitchen', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(379, 'en', 'Display', 'Display', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(380, 'en', 'Delete', 'Delete', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(381, 'en', 'Delete employee', 'Delete employee', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(382, 'en', 'Manager', 'Manager', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(383, 'en', 'Are you sure you want to delete this employee?', 'Are you sure you want to delete this employee?', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(384, 'en', 'Cancel', 'Cancel', '2025-01-08 19:21:35', '2025-01-08 19:21:35'),
(385, 'en', 'Empty cart', 'Empty cart', '2025-01-08 19:22:40', '2025-01-08 19:22:40');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` text DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT 6,
  `is_email_verified` tinyint(1) DEFAULT 0,
  `is_suspended` tinyint(1) DEFAULT 0,
  `notification_sound` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `password`, `address`, `role_id`, `is_email_verified`, `is_suspended`, `notification_sound`, `created_at`, `updated_at`) VALUES
(1, 'Test', 'Admin', 'admin@test.com', '+8801232332', '$scrypt$n=16384,r=8,p=1$iGWfi7CaTBiCcRo1VjNccg$j84D6nD9B6Cuefvj5RW7Gp/8yh5ZdCCNw0qPiK+Mmq27jDDeSmS4tFAkmD6giwxv/JlgzPP6BTnaRRvgo9JrwQ', 'Test', 1, 1, 0, 1, '2025-01-08 19:09:16', '2025-01-08 19:09:16');

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `allow_multiple` tinyint(1) DEFAULT 0,
  `requirement` enum('optional','required') DEFAULT 'optional',
  `min` int(11) DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `variant_options`
--

CREATE TABLE `variant_options` (
  `id` int(10) UNSIGNED NOT NULL,
  `variant_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addons`
--
ALTER TABLE `addons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adonis_schema_versions`
--
ALTER TABLE `adonis_schema_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `business_setups`
--
ALTER TABLE `business_setups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `charges`
--
ALTER TABLE `charges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_addons`
--
ALTER TABLE `item_addons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_addons_menu_item_id_foreign` (`menu_item_id`),
  ADD KEY `item_addons_addon_id_foreign` (`addon_id`);

--
-- Indexes for table `item_charges`
--
ALTER TABLE `item_charges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_charges_menu_item_id_foreign` (`menu_item_id`),
  ADD KEY `item_charges_charge_id_foreign` (`charge_id`);

--
-- Indexes for table `item_variants`
--
ALTER TABLE `item_variants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_variants_menu_item_id_foreign` (`menu_item_id`),
  ADD KEY `item_variants_variant_id_foreign` (`variant_id`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_items_category_id_foreign` (`category_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_foreign` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_order_number_unique` (`order_number`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_delivery_man_id_foreign` (`delivery_man_id`);

--
-- Indexes for table `order_charges`
--
ALTER TABLE `order_charges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_charges_order_id_foreign` (`order_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_menu_item_id_foreign` (`menu_item_id`);

--
-- Indexes for table `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_methods_key_unique` (`key`);

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `remember_me_tokens`
--
ALTER TABLE `remember_me_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `remember_me_tokens_hash_unique` (`hash`),
  ADD KEY `remember_me_tokens_tokenable_id_foreign` (`tokenable_id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservations_user_id_foreign` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokens_token_unique` (`token`),
  ADD KEY `tokens_user_id_foreign` (`user_id`);

--
-- Indexes for table `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `variants_value_unique` (`value`);

--
-- Indexes for table `variant_options`
--
ALTER TABLE `variant_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variant_options_variant_id_foreign` (`variant_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addons`
--
ALTER TABLE `addons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `business_setups`
--
ALTER TABLE `business_setups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `charges`
--
ALTER TABLE `charges`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_addons`
--
ALTER TABLE `item_addons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_charges`
--
ALTER TABLE `item_charges`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_variants`
--
ALTER TABLE `item_variants`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_charges`
--
ALTER TABLE `order_charges`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `remember_me_tokens`
--
ALTER TABLE `remember_me_tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `translations`
--
ALTER TABLE `translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=386;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `variant_options`
--
ALTER TABLE `variant_options`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `item_addons`
--
ALTER TABLE `item_addons`
  ADD CONSTRAINT `item_addons_addon_id_foreign` FOREIGN KEY (`addon_id`) REFERENCES `addons` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `item_addons_menu_item_id_foreign` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `item_charges`
--
ALTER TABLE `item_charges`
  ADD CONSTRAINT `item_charges_charge_id_foreign` FOREIGN KEY (`charge_id`) REFERENCES `charges` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `item_charges_menu_item_id_foreign` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `item_variants`
--
ALTER TABLE `item_variants`
  ADD CONSTRAINT `item_variants_menu_item_id_foreign` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `item_variants_variant_id_foreign` FOREIGN KEY (`variant_id`) REFERENCES `variants` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_delivery_man_id_foreign` FOREIGN KEY (`delivery_man_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `order_charges`
--
ALTER TABLE `order_charges`
  ADD CONSTRAINT `order_charges_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_menu_item_id_foreign` FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `remember_me_tokens`
--
ALTER TABLE `remember_me_tokens`
  ADD CONSTRAINT `remember_me_tokens_tokenable_id_foreign` FOREIGN KEY (`tokenable_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `variant_options`
--
ALTER TABLE `variant_options`
  ADD CONSTRAINT `variant_options_variant_id_foreign` FOREIGN KEY (`variant_id`) REFERENCES `variants` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
