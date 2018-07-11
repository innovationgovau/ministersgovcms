<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * Ministers 2016 theme.
 */

function ministers_2016_form_search_block_form_alter(&$form, &$form_state, $form_id) {
    //$form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    //$form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    //$form['search_block_form']['#size'] = 40;  // define size of the textfield
    //$form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    $form['actions']['submit']['#value'] = t('GO'); // Change the text on the submit button
    $form['actions']['submit']['#attributes'] = array('class' => array('button'));
    //$form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search-button.png');

    // Add extra attributes to the text box
    //$form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    //$form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
} 

function ministers_2016_block_render($module, $block_id, $debug = FALSE) {
    $block = block_load($module, $block_id);
    if($debug) {
        dpm($block);
    }
    if (!isset($block->region)) {
        $block->region = '';
    }
    if (!isset($block->title)) {
        $block->title = '';
    }
    $block_content = _block_render_blocks(array($block));
    $build = _block_get_renderable_array($block_content);
    $block_rendered = drupal_render($build);
    return $block_rendered;
}

function ministers_2016_minister_check() {
    //Function to check whether the current page has the 'Ministers' vocabulary.
    $termid = arg(2);
    if (isset($termid)) { 
        $term = taxonomy_term_load($termid);
        if ($term->vocabulary_machine_name = 'ministers') {
            // If the page has the correct vocabulary, return TRUE.
            return TRUE;
        } else {
            // If the page does not have the correct vocabulary, return FALSE.
            return FALSE;
        }
    } else {
        // If the page does not have any taxonomy (such as the home page), return FALSE.
        return FALSE;
    }
}