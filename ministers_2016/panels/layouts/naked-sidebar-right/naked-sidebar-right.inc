<?php

/**
 * @file
 * Defines a naked one-column layout.
 */

// Plugin definition.
$plugin = array(
  'title' => t('Naked Sidebar Right'),
  'category' => t('Ministers Site content layouts'),
  'icon' => 'naked-sidebar-right.png',
  'theme' => 'naked-sidebar-right',
  'regions' => array(
    'content' => t('Content'),
    'sidebar_right' => t('Sidebar Right')
  ),
);
