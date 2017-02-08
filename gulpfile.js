var babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    gulp = require('gulp'),
    es6Path = 'js/*.js',
    compilePath = 'dist';

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(compilePath));
});

gulp.task('watch', function() {
    gulp.watch(es6Path, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
