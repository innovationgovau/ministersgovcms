<?php

/**
 * @file
 * Defines a naked one-column layout.
 */

// Plugin definition.
$plugin = array(
  'title' => t('Naked No Sidebar'),
  'category' => t('Ministers Site content layouts'),
  'icon' => 'naked-no-sidebar.png',
  'theme' => 'naked-no-sidebar',
  'regions' => array(
    'content' => t('Content'),
  ),
);
