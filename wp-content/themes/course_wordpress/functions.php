<?php


function menu_setup() {
  register_nav_menus( array( 
    'header' => 'Header menu', 
    'footer' => 'Footer menu' 
  ) );
 }  
add_action( 'after_setup_theme', 'menu_setup' );

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}


/********************************************************/
// Page Slug Body Class
/********************************************************/

function add_slug_body_class_mccan( $classes ) {
    global $post;
    if ( isset( $post ) ) {
    $classes[] = $post->post_type . '-' . $post->post_name;
    }
    return $classes;
    }
    add_filter( 'body_class', 'add_slug_body_class_mccan' );


/********************************************************/
// Remove Editor
/********************************************************/
// add_action('init', 'remove_content_editor_mccan');

// function remove_content_editor_mccan() {
//     remove_post_type_support( 'page', 'editor' );
//     remove_post_type_support( 'post', 'editor' );
// }

/********************************************************/
// SVG
/********************************************************/
add_filter( 'upload_mimes', 'my_myme_types_mccann', 1, 1 );
function my_myme_types_mccann( $mime_types ) {
  $mime_types['svg'] = 'image/svg+xml';     // Adding .svg extension
  $mime_types['json'] = 'application/json'; // Adding .json extension
  
  unset( $mime_types['xls'] );  // Remove .xls extension
  unset( $mime_types['xlsx'] ); // Remove .xlsx extension
  
  return $mime_types;
}

/********************************************************/
// Console_log
/********************************************************/
function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}

/********************************************************/
// Function to change "posts" to "Cars" in the admin side menu
/********************************************************/
// function change_post_menu_label() {
//   global $menu;
//   global $submenu;
//   $menu[5][0] = 'Cars';
//   $submenu['edit.php'][5][0] = 'Cars';
//   $submenu['edit.php'][10][0] = 'Add Cars';
//   $submenu['edit.php'][16][0] = 'Tags';
//   echo '';
// }
// add_action( 'admin_menu', 'change_post_menu_label' );
// // Function to change post object labels to "Cars"
// function change_post_object_label() {
//   global $wp_post_types;
//   $labels = &$wp_post_types['post']->labels;
//   $labels->name = 'Cars';
//   $labels->singular_name = 'Cars';
//   $labels->add_new = 'Add Cars';
//   $labels->add_new_item = 'Add Cars';
//   $labels->edit_item = 'Edit Cars';
//   $labels->new_item = 'Cars';
//   $labels->view_item = 'View Cars';
//   $labels->search_items = 'Search Cars';
//   $labels->not_found = 'No Cars found';
//   $labels->not_found_in_trash = 'No Cars found in Trash';
// }
// add_action( 'init', 'change_post_object_label' );


add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts() {
  echo '<style>
    .edit-php .page-title-action {
        display:none !important;
    } 
  </style>';
}

/********************************************************/
// YouTube Embed
/********************************************************/
function getYoutubeEmbedUrl($url)
{
    $shortUrlRegex = '/youtu.be\/([a-zA-Z0-9_-]+)\??/i';
    $longUrlRegex = '/youtube.com\/((?:embed)|(?:watch))((?:\?v\=)|(?:\/))([a-zA-Z0-9_-]+)/i';
    
    if (preg_match($longUrlRegex, $url, $matches)) {
        $youtube_id = $matches[count($matches) - 1];
    }
    
    if (preg_match($shortUrlRegex, $url, $matches)) {
        $youtube_id = $matches[count($matches) - 1];
    }
    echo $youtube_id;

}

add_action('youtube_url','getYoutubeEmbedUrl');





function university_files() {
  wp_enqueue_script('main-university-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  wp_enqueue_style('university_main_styles', get_theme_file_uri('/build/style-index.css'));
  wp_enqueue_style('university_extra_styles', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'university_files');

function university_features() {
    register_nav_menu('headerMenuLocation', 'Header Menu Location');
    add_theme_support( 'title-tag');
}

add_action('after_setup_theme','university_features');