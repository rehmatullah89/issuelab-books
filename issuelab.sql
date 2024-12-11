-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2016 at 10:45 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `issuelab`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_log`
--

CREATE TABLE IF NOT EXISTS `activity_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `listing_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  `kc_id` int(10) NOT NULL,
  `action_date` varchar(255) NOT NULL,
  `action_date_mktime` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `listing_id` (`listing_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20844 ;

-- --------------------------------------------------------

--
-- Table structure for table `activity_log_pending`
--

CREATE TABLE IF NOT EXISTS `activity_log_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `listing_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  `kc_id` int(10) NOT NULL,
  `action_date` varchar(255) NOT NULL,
  `action_date_mktime` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5439 ;

-- --------------------------------------------------------

--
-- Table structure for table `api_requester`
--

CREATE TABLE IF NOT EXISTS `api_requester` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `organization` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `person_title` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `project_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `project_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `api_key` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` datetime NOT NULL,
  `date_added_mktime` int(40) NOT NULL,
  `date_modified` datetime NOT NULL,
  `date_modified_mktime` int(40) NOT NULL,
  `is_ip_bind` tinyint(1) NOT NULL DEFAULT '0',
  `ip_domain` bigint(5) DEFAULT '0',
  `status` varchar(25) COLLATE utf8_unicode_ci DEFAULT 'active',
  `api_request_rate` int(5) DEFAULT '0',
  `terms_accepted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=67 ;

-- --------------------------------------------------------

--
-- Table structure for table `api_usage_logs`
--

CREATE TABLE IF NOT EXISTS `api_usage_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `api_id` int(11) NOT NULL,
  `request_ip` bigint(5) NOT NULL,
  `request_url` varchar(500) NOT NULL,
  `format_url` varchar(500) NOT NULL,
  `solr_url` text,
  `notes` varchar(255) DEFAULT NULL,
  `is_success` tinyint(1) NOT NULL DEFAULT '0',
  `request_datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `api_id` (`api_id`),
  KEY `request_ip` (`request_ip`),
  KEY `is_success` (`is_success`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=69561 ;

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE IF NOT EXISTS `author` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `first` varchar(100) NOT NULL,
  `middle1` varchar(100) NOT NULL,
  `middle2` varchar(100) NOT NULL,
  `middle3` varchar(100) NOT NULL,
  `last` varchar(100) NOT NULL,
  `suffix` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `fullname` (`fullname`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17829 ;

-- --------------------------------------------------------

--
-- Table structure for table `category_resources`
--

CREATE TABLE IF NOT EXISTS `category_resources` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cat_id` int(11) NOT NULL,
  `kc_id` int(11) NOT NULL,
  `rescource_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=804 ;

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(16) NOT NULL DEFAULT '0',
  `user_agent` varchar(150) NOT NULL,
  `last_activity` int(10) NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `coverage`
--

CREATE TABLE IF NOT EXISTS `coverage` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `continent` varchar(255) NOT NULL,
  `continent_region` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `country_region` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `state_region` varchar(255) NOT NULL,
  `county` varchar(255) NOT NULL,
  `county_region` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `city_region` varchar(255) NOT NULL,
  `other` text NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1345 ;

-- --------------------------------------------------------

--
-- Table structure for table `datascope`
--

CREATE TABLE IF NOT EXISTS `datascope` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `keyword` char(1) NOT NULL DEFAULT '0',
  `key_finding` char(1) NOT NULL DEFAULT '0',
  `wikitopic_article` char(1) NOT NULL DEFAULT '0',
  `wikitopic_category` char(1) NOT NULL DEFAULT '0',
  `date_checked` varchar(100) NOT NULL,
  `date_mktime` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`keyword`),
  KEY `audience_id` (`keyword`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16426 ;

-- --------------------------------------------------------

--
-- Table structure for table `doctype`
--

CREATE TABLE IF NOT EXISTS `doctype` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `doctype` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

-- --------------------------------------------------------

--
-- Table structure for table `doi_requester`
--

CREATE TABLE IF NOT EXISTS `doi_requester` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `staff_page_link` varchar(255) NOT NULL,
  `linkedin_page_link` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `additional_info` text NOT NULL,
  `certified` int(11) NOT NULL DEFAULT '1',
  `verified` int(11) NOT NULL DEFAULT '0',
  `organization_id` bigint(20) DEFAULT NULL,
  `date` date NOT NULL,
  `date_mktime` int(11) NOT NULL,
  `organization_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=78 ;

-- --------------------------------------------------------

--
-- Table structure for table `doi_requests`
--

CREATE TABLE IF NOT EXISTS `doi_requests` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `requester_id` bigint(20) NOT NULL,
  `organization_id` bigint(20) NOT NULL,
  `resource_id` bigint(20) NOT NULL,
  `xml` text NOT NULL,
  `xml_timestamp` int(11) DEFAULT NULL,
  `doi_batch_id` varchar(255) NOT NULL,
  `conflicts` bigint(20) NOT NULL,
  `check_date` date NOT NULL,
  `check_date_mktime` int(11) NOT NULL,
  `issue_date` date NOT NULL,
  `issue_date_mktime` int(11) NOT NULL,
  `doi` varchar(255) NOT NULL,
  `short_doi` varchar(255) NOT NULL,
  `update_batch_id` varchar(255) NOT NULL,
  `last_modified_date` date NOT NULL,
  `last_modified_date_mktime` int(11) NOT NULL,
  `requested_at` date NOT NULL,
  `requested_at_mktime` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=201 ;

-- --------------------------------------------------------

--
-- Table structure for table `dx_users`
--

CREATE TABLE IF NOT EXISTS `dx_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(34) NOT NULL,
  `email` varchar(100) NOT NULL,
  `banned` tinyint(1) NOT NULL,
  `ban_reason` varchar(255) NOT NULL,
  `newpass` varchar(34) NOT NULL,
  `newpass_key` varchar(32) NOT NULL,
  `newpass_time` datetime NOT NULL,
  `last_ip` varchar(40) NOT NULL,
  `last_login` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `funder`
--

CREATE TABLE IF NOT EXISTS `funder` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `gm_key` varchar(255) NOT NULL,
  `ein` varchar(20) NOT NULL,
  `funder` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `fc_name` varchar(200) NOT NULL,
  `street_addr` varchar(200) NOT NULL,
  `street_addr2` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `zipcode` varchar(20) NOT NULL,
  `state_code` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `country` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `fax` varchar(20) NOT NULL,
  `url` varchar(255) NOT NULL,
  `fdo_url` varchar(200) NOT NULL,
  `date_modified` varchar(20) NOT NULL,
  `date_modified_mktime` varchar(20) NOT NULL,
  `guidestar_id` varchar(100) NOT NULL,
  `guidestar_name` varchar(300) NOT NULL,
  `fundref` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `funder` (`funder`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3734 ;

-- --------------------------------------------------------

--
-- Table structure for table `import_csv`
--

CREATE TABLE IF NOT EXISTS `import_csv` (
  `id` varchar(3) NOT NULL DEFAULT '',
  `flag` varchar(300) NOT NULL,
  `title` varchar(300) DEFAULT NULL,
  `identifier` varchar(300) NOT NULL,
  `description` text,
  `language` varchar(300) DEFAULT NULL,
  `lang_code` varchar(300) NOT NULL,
  `publishers` varchar(300) DEFAULT NULL,
  `organization_id` varchar(300) NOT NULL,
  `copyright` varchar(300) DEFAULT NULL,
  `authors` varchar(300) DEFAULT NULL,
  `author_id` varchar(300) NOT NULL,
  `pub_year` varchar(4) DEFAULT NULL,
  `pub_month` varchar(2) DEFAULT NULL,
  `pub_day` varchar(2) DEFAULT NULL,
  `pub_mktime` varchar(300) NOT NULL,
  `download_URL` varchar(300) DEFAULT NULL,
  `filename` varchar(300) DEFAULT NULL,
  `issue1` varchar(34) DEFAULT NULL,
  `issue2` varchar(34) DEFAULT NULL,
  `issue3` varchar(34) DEFAULT NULL,
  `issue_id` varchar(300) NOT NULL,
  `coverage` varchar(300) DEFAULT NULL,
  `coverage_id` varchar(300) NOT NULL,
  `funders` varchar(300) DEFAULT NULL,
  `funder_id` varchar(300) NOT NULL,
  `doctype` varchar(27) DEFAULT NULL,
  `doctype_id` varchar(300) NOT NULL,
  `doi` varchar(10) DEFAULT NULL,
  `isbn` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ip_management`
--

CREATE TABLE IF NOT EXISTS `ip_management` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `ip_address` bigint(5) NOT NULL,
  `blockby` int(11) NOT NULL,
  `date_of_block` datetime NOT NULL,
  `modifiy_date` datetime DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `is_ban` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `project_id` (`project_id`),
  KEY `ip_address` (`ip_address`),
  KEY `blockby` (`blockby`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

-- --------------------------------------------------------

--
-- Table structure for table `issue_area`
--

CREATE TABLE IF NOT EXISTS `issue_area` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `issue_area` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `identifier_2` (`identifier`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_administrators`
--

CREATE TABLE IF NOT EXISTS `kc_administrators` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `kc_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=209 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_admin_updates`
--

CREATE TABLE IF NOT EXISTS `kc_admin_updates` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(350) NOT NULL,
  `teaser` text NOT NULL,
  `text` text NOT NULL,
  `date_added` varchar(100) NOT NULL,
  `date_added_mktime` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_auto_feature`
--

CREATE TABLE IF NOT EXISTS `kc_auto_feature` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `kc_id` int(10) NOT NULL,
  `listing_id` int(10) NOT NULL,
  `date_featured` varchar(10) NOT NULL,
  `date_featured_mktime` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=203 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_categories`
--

CREATE TABLE IF NOT EXISTS `kc_categories` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `p_id` int(11) NOT NULL,
  `kc_id` int(10) NOT NULL,
  `category` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=811 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_clients`
--

CREATE TABLE IF NOT EXISTS `kc_clients` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=34 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_listings`
--

CREATE TABLE IF NOT EXISTS `kc_listings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `kc_id` int(10) NOT NULL,
  `listing_id` int(10) NOT NULL,
  `description` text NOT NULL,
  `teaser` text NOT NULL,
  `key_findings` int(1) NOT NULL DEFAULT '0',
  `feature` int(1) NOT NULL DEFAULT '0',
  `include` int(1) NOT NULL DEFAULT '0',
  `remove` int(1) NOT NULL DEFAULT '0',
  `date_added` date NOT NULL,
  `date_added_mktime` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16427 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_listing_categories`
--

CREATE TABLE IF NOT EXISTS `kc_listing_categories` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `kc_id` int(10) NOT NULL,
  `listing_id` int(10) NOT NULL,
  `category_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40841 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_options`
--

CREATE TABLE IF NOT EXISTS `kc_options` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kc_id` int(11) DEFAULT NULL,
  `resource_metadata_id` int(11) DEFAULT NULL,
  `custom_label` varchar(255) DEFAULT NULL,
  `show_in_search` int(11) DEFAULT NULL,
  `is_expanded` int(11) DEFAULT NULL,
  `show_in_resourse` int(11) DEFAULT NULL,
  `enable_kc_opt` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=243 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_organizations`
--

CREATE TABLE IF NOT EXISTS `kc_organizations` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `kc_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=259 ;

-- --------------------------------------------------------

--
-- Table structure for table `kc_tos`
--

CREATE TABLE IF NOT EXISTS `kc_tos` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `kc_id` int(4) NOT NULL,
  `subdomain` varchar(300) NOT NULL,
  `accepted` char(1) NOT NULL,
  `administrator` varchar(100) NOT NULL,
  `user_id` bigint(10) NOT NULL,
  `version` int(3) NOT NULL,
  `date` varchar(100) NOT NULL,
  `date_mktime` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `version` (`kc_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

-- --------------------------------------------------------

--
-- Table structure for table `keyword`
--

CREATE TABLE IF NOT EXISTS `keyword` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `keyword` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `stem` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23699 ;

-- --------------------------------------------------------

--
-- Table structure for table `key_finding`
--

CREATE TABLE IF NOT EXISTS `key_finding` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kc_id` int(11) NOT NULL,
  `resource_id` int(11) NOT NULL,
  `key_finding` text NOT NULL,
  `sort_order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4764 ;

-- --------------------------------------------------------

--
-- Table structure for table `knowledge_centers`
--

CREATE TABLE IF NOT EXISTS `knowledge_centers` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `client_id` int(10) NOT NULL,
  `subdomain` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `results_per_page` int(10) NOT NULL DEFAULT '10',
  `number_of_page_links` int(10) NOT NULL DEFAULT '1',
  `include_key_findings` int(1) NOT NULL DEFAULT '0',
  `tweet` int(1) NOT NULL DEFAULT '0',
  `include_teasers` int(1) NOT NULL DEFAULT '0',
  `include_kc_menu` int(10) NOT NULL DEFAULT '0',
  `kc_menu_title` varchar(255) NOT NULL,
  `search_form_keyword_input` int(10) NOT NULL DEFAULT '1',
  `search_form_pubdate_menu` int(10) NOT NULL DEFAULT '1',
  `search_form_selects` varchar(255) NOT NULL,
  `search_form_checkboxes` varchar(255) NOT NULL,
  `service_type` varchar(50) NOT NULL,
  `kc_display` enum('grid_view','list_view','','') NOT NULL,
  `advance_search_expanded` tinyint(1) NOT NULL DEFAULT '0',
  `switch_category_view` enum('optgroup_view','select_view') NOT NULL DEFAULT 'optgroup_view',
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `client_id_2` (`client_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=108 ;

-- --------------------------------------------------------

--
-- Table structure for table `knowledge_centers_copy`
--

CREATE TABLE IF NOT EXISTS `knowledge_centers_copy` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `client_id` int(10) NOT NULL,
  `subdomain` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `results_per_page` int(10) NOT NULL DEFAULT '10',
  `number_of_page_links` int(10) NOT NULL DEFAULT '1',
  `include_key_findings` int(1) NOT NULL DEFAULT '0',
  `tweet` int(1) NOT NULL DEFAULT '0',
  `include_teasers` int(1) NOT NULL DEFAULT '0',
  `include_kc_menu` int(10) NOT NULL DEFAULT '0',
  `kc_menu_title` varchar(255) NOT NULL,
  `search_form_keyword_input` int(10) NOT NULL DEFAULT '1',
  `search_form_pubdate_menu` int(10) NOT NULL DEFAULT '1',
  `search_form_selects` varchar(255) NOT NULL,
  `search_form_checkboxes` varchar(255) NOT NULL,
  `service_type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `client_id_2` (`client_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=104 ;

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE IF NOT EXISTS `language` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `abbrev` char(3) NOT NULL,
  `language` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=369 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_author`
--

CREATE TABLE IF NOT EXISTS `link_resource_author` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `author_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`author_id`),
  KEY `author_id` (`author_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=36052 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_author_pending`
--

CREATE TABLE IF NOT EXISTS `link_resource_author_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `author_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`author_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10264 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_coverage`
--

CREATE TABLE IF NOT EXISTS `link_resource_coverage` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `coverage_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_id` (`resource_id`),
  KEY `coverage_id` (`coverage_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=27130 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_coverage_pending`
--

CREATE TABLE IF NOT EXISTS `link_resource_coverage_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `coverage_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7575 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_doctype`
--

CREATE TABLE IF NOT EXISTS `link_resource_doctype` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `doctype_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_id` (`resource_id`),
  KEY `doctype_id` (`doctype_id`),
  KEY `res_doc_index` (`resource_id`,`doctype_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=36124 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_doctype_pending`
--

CREATE TABLE IF NOT EXISTS `link_resource_doctype_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `doctype_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8407 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_funder`
--

CREATE TABLE IF NOT EXISTS `link_resource_funder` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `funder_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`funder_id`),
  KEY `funder_id` (`funder_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19045 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_funder_pending`
--

CREATE TABLE IF NOT EXISTS `link_resource_funder_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `funder_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`funder_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1732 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_issue_area`
--

CREATE TABLE IF NOT EXISTS `link_resource_issue_area` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `issue_area_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`issue_area_id`),
  KEY `issue_area_id` (`issue_area_id`),
  KEY `res_area_index` (`resource_id`,`issue_area_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=43376 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_issue_area_pending`
--

CREATE TABLE IF NOT EXISTS `link_resource_issue_area_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `issue_area_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`issue_area_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11271 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_keyword`
--

CREATE TABLE IF NOT EXISTS `link_resource_keyword` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `keyword_id` int(10) NOT NULL,
  `score` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`keyword_id`),
  KEY `keyword_id` (`keyword_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=66705 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_keyword_pending`
--

CREATE TABLE IF NOT EXISTS `link_resource_keyword_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `keyword_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`keyword_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2971 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_language`
--

CREATE TABLE IF NOT EXISTS `link_resource_language` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `language_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`language_id`),
  KEY `author_id` (`language_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21181 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_organization`
--

CREATE TABLE IF NOT EXISTS `link_resource_organization` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  `role` enum('organization','funder','','') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `res_org_index` (`resource_id`,`organization_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=46781 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_organization_before_merge`
--

CREATE TABLE IF NOT EXISTS `link_resource_organization_before_merge` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`organization_id`),
  KEY `organization_id` (`organization_id`),
  KEY `res_org_index` (`resource_id`,`organization_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=29468 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_organization_pending`
--

CREATE TABLE IF NOT EXISTS `link_resource_organization_pending` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`organization_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9074 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_universal_identifier`
--

CREATE TABLE IF NOT EXISTS `link_resource_universal_identifier` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `universal_identifier_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`universal_identifier_id`),
  KEY `keyword_id` (`universal_identifier_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=585 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_wikitopic_article`
--

CREATE TABLE IF NOT EXISTS `link_resource_wikitopic_article` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `wikitopic_article_id` int(10) NOT NULL,
  `score` varchar(300) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`wikitopic_article_id`),
  KEY `organization_id` (`wikitopic_article_id`),
  KEY `res_org_index` (`resource_id`,`wikitopic_article_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40860 ;

-- --------------------------------------------------------

--
-- Table structure for table `link_resource_wikitopic_category`
--

CREATE TABLE IF NOT EXISTS `link_resource_wikitopic_category` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `wikitopic_category_id` int(10) NOT NULL,
  `score` varchar(300) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`wikitopic_category_id`),
  KEY `organization_id` (`wikitopic_category_id`),
  KEY `res_org_index` (`resource_id`,`wikitopic_category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=74892 ;

-- --------------------------------------------------------

--
-- Table structure for table `login_attempts`
--

CREATE TABLE IF NOT EXISTS `login_attempts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(40) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `manage_doi_ids`
--

CREATE TABLE IF NOT EXISTS `manage_doi_ids` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=335 ;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oai`
--

CREATE TABLE IF NOT EXISTS `oai` (
  `id` int(20) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `oai_dc` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `oaisets`
--

CREATE TABLE IF NOT EXISTS `oaisets` (
  `id` int(20) NOT NULL,
  `oaiset` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE IF NOT EXISTS `organization` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `organization` varchar(255) NOT NULL DEFAULT '',
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `mission_statement` text NOT NULL,
  `url` varchar(255) NOT NULL DEFAULT '',
  `mailing_address` varchar(255) NOT NULL DEFAULT '',
  `mailing_address2` varchar(255) NOT NULL DEFAULT '',
  `country` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `state` varchar(100) NOT NULL DEFAULT '',
  `province` varchar(255) NOT NULL DEFAULT '',
  `zip` varchar(100) NOT NULL DEFAULT '',
  `ein` varchar(255) NOT NULL,
  `gm_key` varchar(100) NOT NULL,
  `recipient_key` varchar(100) NOT NULL,
  `fc_name` varchar(300) NOT NULL,
  `fdo_url` varchar(300) NOT NULL,
  `fundref` varchar(255) NOT NULL,
  `guidestar_id` varchar(100) NOT NULL,
  `guidestar_name` varchar(300) NOT NULL,
  `funder_id` varchar(50) NOT NULL,
  `date_added` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `date_added_mktime` int(10) NOT NULL DEFAULT '0',
  `date_modified` varchar(255) NOT NULL DEFAULT '',
  `date_modified_mktime` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10535 ;

-- --------------------------------------------------------

--
-- Table structure for table `organization_affiliations`
--

CREATE TABLE IF NOT EXISTS `organization_affiliations` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `org_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `contact` int(1) NOT NULL DEFAULT '0',
  `superadmin` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7762 ;

-- --------------------------------------------------------

--
-- Table structure for table `organization_before_merge`
--

CREATE TABLE IF NOT EXISTS `organization_before_merge` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `organization` varchar(255) NOT NULL DEFAULT '',
  `identifier` varchar(255) NOT NULL DEFAULT '',
  `permission_to_add_research` char(1) NOT NULL,
  `mission_statement` text NOT NULL,
  `contact_firstname` varchar(255) NOT NULL DEFAULT '',
  `contact_lastname` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(25) NOT NULL DEFAULT '',
  `phone_ext` varchar(255) NOT NULL DEFAULT '',
  `fax` varchar(25) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `mailing_address` varchar(255) NOT NULL DEFAULT '',
  `mailing_address2` varchar(255) NOT NULL DEFAULT '',
  `country` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `state` varchar(100) NOT NULL DEFAULT '',
  `province` varchar(255) NOT NULL DEFAULT '',
  `zip` varchar(100) NOT NULL DEFAULT '',
  `budget` varchar(200) NOT NULL,
  `staff` varchar(200) NOT NULL,
  `found_issuelab` varchar(200) NOT NULL,
  `active` char(1) NOT NULL DEFAULT '0',
  `date_added` varchar(255) NOT NULL DEFAULT '',
  `date_added_mktime` int(10) NOT NULL DEFAULT '0',
  `date_modified` varchar(255) NOT NULL DEFAULT '',
  `date_modified_mktime` int(10) NOT NULL DEFAULT '0',
  `ein` varchar(255) NOT NULL,
  `gm_key` varchar(100) NOT NULL,
  `recipient_key` varchar(100) NOT NULL,
  `fc_name` varchar(300) NOT NULL,
  `fdo_url` varchar(300) NOT NULL,
  `guidestar_id` varchar(100) NOT NULL,
  `guidestar_name` varchar(300) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `identifier` (`identifier`),
  KEY `identifier_2` (`identifier`),
  KEY `organization` (`organization`),
  KEY `active` (`active`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11831 ;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `research`
--

CREATE TABLE IF NOT EXISTS `research` (
  `research_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `creator_id` int(11) DEFAULT NULL,
  `approved_by_id` int(11) DEFAULT NULL,
  `listing_org` varchar(255) NOT NULL,
  `title` varchar(300) NOT NULL,
  `identifier` varchar(300) NOT NULL,
  `description` text NOT NULL,
  `subject1` text NOT NULL,
  `rights` text NOT NULL,
  `language` varchar(255) NOT NULL,
  `lang_code` char(3) NOT NULL,
  `coverage` text NOT NULL,
  `pub_date_month` int(2) unsigned zerofill NOT NULL,
  `pub_date_day` int(2) unsigned zerofill NOT NULL DEFAULT '01',
  `pub_date_year` int(4) NOT NULL,
  `pub_date_mktime` int(10) NOT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `download_url` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `cover_graphic` varchar(255) NOT NULL DEFAULT 'default_cover.jpg',
  `cover_graphic_type` int(11) DEFAULT NULL,
  `duplicated_detected` int(11) DEFAULT '0',
  `doc_viewer` varchar(255) NOT NULL,
  `how_to_obtain` text,
  `ok_to_share` char(1) NOT NULL,
  `date_added` varchar(10) NOT NULL,
  `date_added_mktime` int(10) NOT NULL,
  `date_modified` varchar(10) NOT NULL,
  `date_modified_mktime` int(10) NOT NULL,
  `special_comments` text,
  `available` char(1) NOT NULL DEFAULT '0',
  `approved` char(1) NOT NULL DEFAULT '0',
  `subdomain` char(1) NOT NULL DEFAULT '0',
  `include_in_subdomain` text NOT NULL,
  `publish_to_parent` tinyint(4) NOT NULL DEFAULT '0',
  `rss_feed` char(1) NOT NULL DEFAULT '0',
  `license_type` enum('NO_LICENCE','CC_LICENSE','CUSTOM') DEFAULT NULL,
  `license` text,
  `publish_status` enum('PENDING','PUBLISHED','REJECTED','APPROVED','DRAFT') DEFAULT 'DRAFT',
  PRIMARY KEY (`research_id`),
  KEY `identifier` (`identifier`(255)),
  KEY `date_added_mktime` (`date_added_mktime`),
  KEY `date_modified_mktime` (`date_modified_mktime`),
  KEY `pub_date_mktime` (`pub_date_mktime`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23684 ;

-- --------------------------------------------------------

--
-- Table structure for table `research_pending`
--

CREATE TABLE IF NOT EXISTS `research_pending` (
  `research_id` int(3) NOT NULL AUTO_INCREMENT,
  `listing_org` varchar(95) DEFAULT NULL,
  `funders` varchar(334) DEFAULT NULL,
  `organization` varchar(265) DEFAULT NULL,
  `authors` varchar(147) DEFAULT NULL,
  `title` text,
  `identifier` varchar(255) DEFAULT NULL,
  `description` text,
  `issue_areas` varchar(78) DEFAULT NULL,
  `keywords` varchar(391) DEFAULT NULL,
  `rights` text,
  `audience` varchar(202) DEFAULT NULL,
  `doctype` varchar(66) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `lang_code` varchar(3) DEFAULT NULL,
  `coverage` varchar(1136) DEFAULT NULL,
  `pub_date_month` int(2) DEFAULT NULL,
  `pub_date_day` int(2) DEFAULT NULL,
  `pub_date_year` int(4) DEFAULT NULL,
  `pub_date_mktime` int(10) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `download_url` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `doc_viewer` varchar(255) DEFAULT NULL,
  `how_to_obtain` varchar(255) DEFAULT NULL,
  `ok_to_share` int(1) DEFAULT NULL,
  `date_added` varchar(10) DEFAULT NULL,
  `date_added_mktime` int(10) DEFAULT NULL,
  `date_modified` varchar(10) DEFAULT NULL,
  `date_modified_mktime` int(10) DEFAULT NULL,
  `special_comments` int(3) DEFAULT NULL,
  `available` int(1) DEFAULT NULL,
  `approved` int(1) DEFAULT NULL,
  `subdomain` int(1) DEFAULT NULL,
  `include_in_subdomain` varchar(12) DEFAULT NULL,
  `rss_feed` int(1) DEFAULT NULL,
  PRIMARY KEY (`research_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6058 ;

-- --------------------------------------------------------

--
-- Table structure for table `resource_metadata`
--

CREATE TABLE IF NOT EXISTS `resource_metadata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `is_search_option` tinyint(1) NOT NULL DEFAULT '0',
  `is_resource_option` tinyint(1) NOT NULL DEFAULT '0',
  `is_kc_option` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `rss_urls`
--

CREATE TABLE IF NOT EXISTS `rss_urls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rss_url` varchar(255) NOT NULL,
  `api_key` varchar(255) NOT NULL,
  `alias` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=37 ;

-- --------------------------------------------------------

--
-- Table structure for table `search_terms`
--

CREATE TABLE IF NOT EXISTS `search_terms` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `domain` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `search` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ip_address` varchar(300) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `sort` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `date_published_start` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `date_published_end` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `doctypes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `issue_areas` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `languages` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `coverage` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `authors` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `organizations` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `funders` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `categories` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '',
  `copyrights` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=395008 ;

-- --------------------------------------------------------

--
-- Table structure for table `site_configurations`
--

CREATE TABLE IF NOT EXISTS `site_configurations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rate_limit` int(4) NOT NULL DEFAULT '0',
  `page_limit` int(4) NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `rate_limit` (`rate_limit`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_activity_log`
--

CREATE TABLE IF NOT EXISTS `test_activity_log` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `activity` varchar(255) NOT NULL,
  `listing_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  `kc_id` int(10) NOT NULL,
  `action_date` varchar(255) NOT NULL,
  `action_date_mktime` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `listing_id` (`listing_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=116 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_import`
--

CREATE TABLE IF NOT EXISTS `test_import` (
  `research_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `subject1` text NOT NULL,
  `rights` text NOT NULL,
  `language` varchar(255) NOT NULL,
  `lang_code` char(3) NOT NULL,
  `pub_date_month` int(2) unsigned zerofill NOT NULL,
  `pub_date_day` int(2) unsigned zerofill NOT NULL DEFAULT '01',
  `pub_date_year` int(4) NOT NULL,
  `pub_date_mktime` int(10) NOT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `doi` varchar(300) NOT NULL,
  `download_url` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `doc_viewer` varchar(255) NOT NULL,
  `ok_to_share` char(1) NOT NULL,
  `date_added` varchar(10) NOT NULL,
  `date_added_mktime` int(10) NOT NULL,
  `date_modified` varchar(10) NOT NULL,
  `date_modified_mktime` int(10) NOT NULL,
  `available` char(1) NOT NULL DEFAULT '0',
  `approved` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`research_id`),
  KEY `identifier` (`identifier`),
  KEY `date_added_mktime` (`date_added_mktime`),
  KEY `date_modified_mktime` (`date_modified_mktime`),
  KEY `pub_date_mktime` (`pub_date_mktime`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=116 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_kc_listings`
--

CREATE TABLE IF NOT EXISTS `test_kc_listings` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `kc_id` int(10) NOT NULL,
  `listing_id` int(10) NOT NULL,
  `description` text NOT NULL,
  `teaser` text NOT NULL,
  `key_findings` int(1) NOT NULL DEFAULT '0',
  `feature` int(1) NOT NULL DEFAULT '0',
  `include` int(1) NOT NULL DEFAULT '0',
  `remove` int(1) NOT NULL DEFAULT '0',
  `date_added` varchar(10) NOT NULL,
  `date_added_mktime` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=116 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_link_resource_author`
--

CREATE TABLE IF NOT EXISTS `test_link_resource_author` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `author_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`author_id`),
  KEY `author_id` (`author_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=132 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_link_resource_coverage`
--

CREATE TABLE IF NOT EXISTS `test_link_resource_coverage` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `coverage_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_id` (`resource_id`),
  KEY `coverage_id` (`coverage_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=125 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_link_resource_doctype`
--

CREATE TABLE IF NOT EXISTS `test_link_resource_doctype` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `doctype_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_id` (`resource_id`),
  KEY `doctype_id` (`doctype_id`),
  KEY `res_doc_index` (`resource_id`,`doctype_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=119 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_link_resource_funder`
--

CREATE TABLE IF NOT EXISTS `test_link_resource_funder` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `funder_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`funder_id`),
  KEY `funder_id` (`funder_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=118 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_link_resource_issue_area`
--

CREATE TABLE IF NOT EXISTS `test_link_resource_issue_area` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `issue_area_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`issue_area_id`),
  KEY `issue_area_id` (`issue_area_id`),
  KEY `res_area_index` (`resource_id`,`issue_area_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=227 ;

-- --------------------------------------------------------

--
-- Table structure for table `test_link_resource_organization`
--

CREATE TABLE IF NOT EXISTS `test_link_resource_organization` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `resource_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `resource_id` (`resource_id`,`organization_id`),
  KEY `organization_id` (`organization_id`),
  KEY `res_org_index` (`resource_id`,`organization_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=163 ;

-- --------------------------------------------------------

--
-- Table structure for table `tos`
--

CREATE TABLE IF NOT EXISTS `tos` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `tos_type` varchar(255) NOT NULL,
  `version` int(2) NOT NULL,
  `date` varchar(100) NOT NULL,
  `date_mktime` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `version` (`version`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `universal_identifier`
--

CREATE TABLE IF NOT EXISTS `universal_identifier` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `universal_identifier` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=521 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `employer` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `terms_accepted` int(1) NOT NULL,
  `active` int(1) NOT NULL DEFAULT '0',
  `date_added` varchar(10) NOT NULL,
  `date_added_mktime` int(10) NOT NULL,
  `date_modified` varchar(10) NOT NULL,
  `date_modified_mktime` int(10) NOT NULL,
  `org_id` varchar(10) NOT NULL,
  `email_notification` tinyint(1) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `identifier` (`identifier`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11849 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_autologin`
--

CREATE TABLE IF NOT EXISTS `user_autologin` (
  `key_id` varchar(32) NOT NULL,
  `user_id` mediumint(8) NOT NULL DEFAULT '0',
  `user_agent` varchar(150) NOT NULL,
  `last_ip` varchar(40) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`key_id`,`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE IF NOT EXISTS `user_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `country` varchar(250) DEFAULT NULL,
  `website` varchar(250) DEFAULT NULL,
  `first_name` varchar(250) DEFAULT NULL,
  `last_name` varchar(250) DEFAULT NULL,
  `phone` varchar(55) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `fax` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_temp`
--

CREATE TABLE IF NOT EXISTS `user_temp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(34) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `activation_key` varchar(50) DEFAULT NULL,
  `last_ip` varchar(40) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `wikitopic_article`
--

CREATE TABLE IF NOT EXISTS `wikitopic_article` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `wikitopic_article` varchar(300) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `url` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9933 ;

-- --------------------------------------------------------

--
-- Table structure for table `wikitopic_category`
--

CREATE TABLE IF NOT EXISTS `wikitopic_category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `wikitopic_category` varchar(300) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `url` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12526 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
