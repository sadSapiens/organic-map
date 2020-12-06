const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

//static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "../src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("../src/sass/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest("../src/css"))
        .pipe(autoprefixer({
            browsersList: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("../src/sass/**/*.scss", gulp.parallel("styles"));
    gulp.watch("../src/*.html").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));