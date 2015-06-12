var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


gulp.task('build', function() {
    return gulp.src('src/**/*.*')
        .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js'
    });
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
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

gulp.task('default', ['build', 'nodemon', 'watch']);
