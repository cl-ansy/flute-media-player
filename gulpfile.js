var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');
var sequence    = require('gulp-sequence');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');

var babelify    = require('babelify');
var browserify  = require('browserify');
var watchify    = require('watchify');

var browserSync = require('browser-sync');

var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');

var vendors = [
    'react'
];

gulp.task('vendors', function() {
    return browserify({
            debug: false,
            require: vendors
        })
        .bundle()
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {

});

gulp.task('js', function() {
    var stream = watchify(browserify({
        entries: ['./src/js/main.jsx'],
        transform: [babelify],
        debug: true,
        extensions: ['.jsx'],
        fullPaths: false
    }));

    vendors.forEach(function (vendor) {
        stream.external(vendor);
    });

    return stream.bundle()
        .pipe(source('all.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js'
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('src/**/{*.js,*.jsx}', ['js']);
});

gulp.task('browser-sync', function() {
    browserSync.init(['dist/**/*.*'], {
        proxy: 'http://localhost:3000',
        port: 4000,
        browser: ['google-chrome']
    });
});

gulp.task('default', sequence(['vendors', 'html', 'css', 'js'], 'nodemon', 'watch'));
