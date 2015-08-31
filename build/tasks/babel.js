var gulp = require('gulp');
var babel = require('gulp-babel');
var paths = require('../paths');
gulp.task('babel', function () {
    gulp.src([paths.es6Path])
        .pipe(babel())
        .pipe(gulp.dest(paths.compilePath));
});

