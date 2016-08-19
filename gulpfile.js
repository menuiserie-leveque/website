var gulp       = require('gulp'),
    plumber    = require('gulp-plumber'),
    sass       = require('gulp-sass'),
    clean      = require('gulp-clean-css'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
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

gulp.task('js', function () {
    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/jquery-smooth-scroll/src/jquery.smooth-scroll.js',
            './node_modules/jquery-lazyload/jquery.lazyload.js',
            './src/Resources/assets/js/*.js'
        ])
        .pipe(concat('menuiserie.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/Resources/public/js'));
});

gulp.task('fonts', function() {
    return gulp.src(['./node_modules/bootstrap-sass/assets/fonts/**/*'])
        .pipe(gulp.dest('./src/Resources/public/fonts'));
});

gulp.task('realisation', function () {
    return gulp.src('./src/Resources/assets/images/**/*')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest('./src/Resources/public/images'))
});

gulp.task('watch', ['css'], function () {
    gulp.watch('./src/Resources/sass/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'fonts', 'js', 'realisation']);
