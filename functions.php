<?php

// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;

// Include needed functions
include "inc/inc.js.php";
include "inc/login-screen.php";
include "inc/navbar.php";
include "inc/sidebars.php";
include "inc/post-types.php";
include "inc/group-block-style.php";
include "inc/image-block-style.php";

// Include needed components
include "inc/components/carousel.php";
include "inc/components/brands-slider.php";
include "inc/components/product-grid-item.php";
include "inc/components/product-list-page.php";
include "inc/components/product-detail-page.php";
include "inc/components/account-page.php";

function theme_support()
{
    add_theme_support('woocommerce');
    add_theme_support('wp-block-styles');
}
add_action('after_setup_theme', 'theme_support');

function theme_features()
{
    register_nav_menu('headerMenuLocation', 'Header Menu Location');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_post_type_support('post', 'page-attributes');

    add_image_size('slider', 1500, 700, true);
    add_image_size('page-header', 1500, 250, true);
};


add_action('after_setup_theme', 'theme_features');