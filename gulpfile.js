var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

gulp.task('copy', function() {

});

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js',
        ext: 'html js'
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        files: ['src/**/*.*'],
        proxy: 'http://localhost:3000',
        port: 4000,
        browser: ['google-chrome']
    });
});

gulp.task('default',
    [
        'browser-sync',
        'nodemon'
    ]
);
