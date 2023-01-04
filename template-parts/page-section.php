<?php
$title = strtolower(get_the_title());
$id = str_replace(" ", "-", $title);
?>

<section id="<?php echo $id; ?>">
    <h2><?php the_title(); ?></h2>
    <div class="page">
        <?php the_content(); ?>
    </div>
</section>