<?php get_header(); ?>



<div class="navigation">
    <div class="navigation__header">
        <img class="navigation__header__logo" src="<?php echo get_theme_mod('navbar_logo'); ?>" />
    </div>
    <div class="navigation__body">
        <?php get_template_part('template-parts/menu') ?>
    </div>
</div>

<div class="content">

    <?php
    query_posts(array(
        'post_type' => 'page',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ));

    while (have_posts()) {
        the_post();
        get_template_part('template-parts/page-section');
    }

    wp_reset_query(); ?>

</div>

<?php get_footer() ?>