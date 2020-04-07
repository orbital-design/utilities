var autoprefixer = require('autoprefixer'),
    babel = require('gulp-babel'),
    calc = require('postcss-calc'),
    cssnano = require('cssnano'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    rucksack = require('rucksack-css'),
    postcss = require('gulp-postcss'),
    postcssPresetEnv = require('postcss-preset-env'),
    plumber = require('gulp-plumber'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    stylish = require('jshint-stylish'),
    stylelint = require('stylelint'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

gulp.task('css', function () {
    const postcss = require('gulp-postcss')

    // return gulp.src('src/style/s.css')
    return gulp.src('src/base.scss')
        .pipe(
            plumber(function(error) {
                gutil.log(gutil.colors.red(error.message));
                this.emit('end');
            })
        )
        .pipe(sass())
        .pipe(postcss([
            // require('tailwindcss'),
            require('autoprefixer'),
            // require('cssnano'),
        ]))

        .pipe(gulp.dest('build/'))
})