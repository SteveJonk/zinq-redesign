<?php wp_nav_menu(
    array(
        'theme_location' => 'headerMenuLocation',
        'depth' => 2,
        'container' => false,
        'link_before' => '<div class="inner">',
        'link_after' => '</div>',
        'menu_id' => "navbar",
        'menu_class' => 'navigation__body__items',
    )

);