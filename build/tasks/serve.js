var gulp = require('gulp');
var browserSync = require('browser-sync');
var superstatic = require( 'superstatic' );
var paths = require('../paths');
gulp.task('serve', ['babel', 'watch'], function() {
  process.stdout.write('Starting browserSync and superstatic...\n');
  browserSync({
    port: 3000,
    files: paths.files,
    injectChanges: true,
    logFileChanges: false,
    logLevel: 'silent',
    logPrefix: 'es6-modules-starter',
    notify: true,
    reloadDelay: 0,
    server: {
      baseDir: '.',
      middleware: superstatic({ debug: false})
    }
  });
});

