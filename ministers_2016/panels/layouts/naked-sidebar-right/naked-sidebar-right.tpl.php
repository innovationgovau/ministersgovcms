<?php
/**
 * @file
 * Plain (naked) layout template, simply printing the content area.
 */
?>
<div class="content-wrapper">
	<div class="main-content">
		<?php print $content['content']; ?>
	</div>
	<div class="sidebar-right">
		<?php print $content['sidebar_right']; ?>
	</div>
</div>
