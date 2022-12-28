<?php get_header() ?>

<div class="navigation">

</div>

<div class="content">
    <?php

    while (have_posts()) {
        the_post();
        the_content();
    } ?>
</div>
<?php get_footer() ?>