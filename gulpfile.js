const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rimraf = require('rimraf');
const sass = require('gulp-sass');
const runSequence = require('run-sequence').use(gulp);
const spritesmith = require('gulp.spritesmith');
const rename = require('gulp-rename');
var postcss = require('gulp-postcss');

/* -------- Server  -------- */
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: 'public'
        }
    });

    gulp.watch('./app/**/**/*', ['build']);
});

/* ------------ Styles compile ------------- */
gulp.task('css:compile', function() {
    return gulp
        .src('app/sass/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(postcss())
        .pipe(gulp.dest('public/css'));
});

/* ------------ html compile ------------- */
gulp.task('html', function() {
    return gulp.src('app/*.html').pipe(gulp.dest('public/'));
});

/* ------------ Sprite ------------- */
gulp.task('sprite', function(cb) {
    const spriteData = gulp.src('app/images/icons/*.png').pipe(
        spritesmith({
            imgName: 'sprite.png',
            imgPath: '../images/sprite.png',
            cssName: 'sprite.scss'
        })
    );

    spriteData.img.pipe(gulp.dest('public/images/'));
    spriteData.css.pipe(gulp.dest('app/sass/global/'));
    cb();
});

/* ------------ Copy fonts ------------- */
gulp.task('copy:fonts', function() {
    return gulp.src('./app/fonts/**/*.*').pipe(gulp.dest('public/fonts'));
});

/* ------------ Copy images ------------- */
gulp.task('copy:images', function() {
    return gulp.src('./source/images/**/*.*').pipe(gulp.dest('build/images'));
});

/* ------------ Build process ------------- */
gulp.task('build', function(callback) {
    runSequence(
        'clean',
        ['css:compile', 'html', 'copy:fonts', 'copy:images', 'browserify'],
        'reload-browser',
        callback
    );
});

/* ------------ Reload browser ------------- */
gulp.task('reload-browser', function() {
    browserSync.reload();
});

/* ------------ JS compile ------------- */
gulp.task('browserify', function() {
    return gulp.src('app/js/*').pipe(gulp.dest('public/js/'));
});

/* ------------ Delete ------------- */
gulp.task('clean', function del(cb) {
    return rimraf('./public/css', cb);
});
