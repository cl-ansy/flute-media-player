var gulp        = require('gulp');
var babel       = require('gulp-babel');
var concat      = require('gulp-concat');
var nodemon     = require('gulp-nodemon');
var sequence    = require('gulp-sequence');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js'
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('src/**/*.js', ['js']);
});

gulp.task('browser-sync', function() {
    browserSync.init(['dist/**/*.*'], {
        proxy: 'http://localhost:3000',
        port: 4000,
        broswer: ['google-chrome']
    });
});

gulp.task('default', sequence(['html', 'js'], 'nodemon', 'watch'));
