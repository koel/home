require('es6-promise').polyfill();
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var livereload  = require('gulp-livereload');
var runSequence = require('run-sequence');
var del         = require('del');

var local       = false;

/**
 * Clean the target directory
 * @param  {[type]}
 * @return {[type]}     [description]
 */
gulp.task('clean', function (cb) {
    return del(['dist/js/**', 'dist/css/**'], cb);
});

/**
 * Generates CSS from SASS
 * @return {[type]} [description]
 */
gulp.task('sass', ['clean'], function () {
    var task = gulp.src('src/sass/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(prefix('last 2 version'))
        .pipe(gulp.dest('dist/css'));

    if (local)
        task = task.pipe(livereload());

    return task;
});

/**
 * Copy the images
 * @param  {[type]} )
 * @return {[type]}   [description]
 */
gulp.task('img', function () {

    var task = gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img'));

    if (local)
        task = task.pipe(livereload());

    return task;
});

/**
 * Watch files and run tasks if they change
 * @return {[type]} [description]
 */
gulp.task('watch', function () {
    local = true;
    livereload.listen();

    gulp.watch('src/sass/**/*.scss',  ['sass']);
    gulp.watch('src/img/**/*', ['img']);
});


/**
 * The default task (called when you run `gulp`)
 */
gulp.task('default', function(cb) {
    runSequence('clean', ['sass', 'img'], cb);
});
