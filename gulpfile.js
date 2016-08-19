var gulp       = require('gulp'),
    plumber    = require('gulp-plumber'),
    sass       = require('gulp-sass'),
    clean      = require('gulp-clean-css'),
    prefixer   = require('gulp-autoprefixer'),
    onError    = function (error) { console.log(error.toString()); this.emit('end'); };

gulp.task('css', function() {
    return gulp.src('./src/Resources/assets/sass/*.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(prefixer())
        .pipe(clean())
        .pipe(gulp.dest('./src/Resources/public/css'));
});

gulp.task('realisation', function () {
    return gulp.src('./src/Resources/assets/images/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest('./src/Resources/public/images'))
});

gulp.task('watch', ['css'], function () {
    gulp.watch('./src/Resources/sass/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'realisation']);
