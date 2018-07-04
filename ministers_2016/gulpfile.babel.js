'use strict';

import plugins  from 'gulp-load-plugins';
import yargs    from 'yargs';
import browser  from 'browser-sync';
import gulp     from 'gulp';
import yaml     from 'js-yaml';
import fs       from 'fs';

// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Load settings from settings.yml
const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}


// Build the site, run the server, and watch for file changes
gulp.task('default', gulp.series(sass, server, watch));

// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
  return gulp.src('./sass/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass,
      noCache: true
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Comment in the pipe below to run UnCSS in production
    //.pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
    .pipe($.if(PRODUCTION, $.cssnano()))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest('css'))
    .pipe(browser.reload({ stream: true }));
}

// Start a server with BrowserSync to preview the site in
function server(done) {
  browser.init({
    proxy: "ministers.dd:8083"
  });
  done();
}

// Watch for changes to Sass.
function watch() {
  gulp.watch('./sass/**/*.scss', sass);
  gulp.watch('./templates/**/*.*', browser.reload);
}
