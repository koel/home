const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const livereload = require('gulp-livereload')
const del = require('del')

let local = false

const createEnvBasedTask = taskFunc => local ? taskFunc().pipe(livereload()) : taskFunc()

gulp.task('clean', cb => del(['dist/js/**', 'dist/css/**', 'dist/img/**'], cb))

gulp.task('sass', gulp.series('clean', () => {
    return createEnvBasedTask(() => {
        return gulp.src('src/sass/main.scss')
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(prefix('last 2 version'))
            .pipe(gulp.dest('dist/css'))
    })
}))

gulp.task('img', () => createEnvBasedTask(() => gulp.src('src/img/**/*').pipe(gulp.dest('dist/img'))))

gulp.task('watch', () => {
    local = true
    livereload.listen()

    gulp.watch('src/sass/**/*.scss',  ['sass'])
    gulp.watch('src/img/**/*', ['img'])
})

gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'img'), cb => cb()))
