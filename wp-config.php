<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpresslearning' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`ip9*=Kv}!V9v3_n306bXF)B:J4d6$PI(D]2?ZeQhb=F~E8PO2~RpM|4jYB.?8!X' );
define( 'SECURE_AUTH_KEY',  'V7fn|N!^G2zcAHMc<M=(ST_7D8Hc]HK,)e8v5.nkmSw.k?urcrI9-=:1!8xBjI4L' );
define( 'LOGGED_IN_KEY',    'M},PO%!JN[[Z .fUYSt4U~*IKmak>LkxHrLJ`!tS_t+(e qO{@`LEOyx847A|,9w' );
define( 'NONCE_KEY',        'j5$u29GdN=63_@Y=A.`Wk>&|;U:HPdsk]tzoHH`Ym4Z{PW=H[tx!Frn~}]HwK0oK' );
define( 'AUTH_SALT',        'Znp(h6Uo`!({i${#bar21~8xs.<Cs!vL9@Jo]2lJ5%>h.D( +ISB>^tY L$2d:U<' );
define( 'SECURE_AUTH_SALT', '{)C5cR^ps>xB)rDYehNN/PvDd]r!%`i4w>^]3Y%=iOO&uuVcW=afBY*vV5g=U|hm' );
define( 'LOGGED_IN_SALT',   'Pmoy/S&PBfUM)!8ZCc4rex9RvVRHuo|dt:k13VQf!62a0brATnoEs#I%z,lc*~uM' );
define( 'NONCE_SALT',       'Ejr!#y9h*R ~)CK)jbY@%fWO>mo<+V(C+^U;qZGdH(+.6{A/7zMf}tH&-D,tim7:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
