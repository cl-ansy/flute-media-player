var gulp        = require('gulp');
var less        = require('gulp-less');
var nodemon     = require('gulp-nodemon');
var sequence    = require('gulp-sequence');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var uglifycss   = require('gulp-uglifycss');

var babelify    = require('babelify');
var browserify  = require('browserify');
var watchify    = require('watchify');

var browserSync = require('browser-sync');

var path        = require('path');
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
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
    return gulp.src('src/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('less-prod', function() {
    return gulp.src('src/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'));
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

gulp.task('js-prod', function() {
    var stream = browserify({
        entries: ['./src/js/main.jsx'],
        transform: [babelify],
        debug: false,
        extensions: ['.jsx'],
        fullPaths: false
    });

    vendors.forEach(function (vendor) {
        stream.external(vendor);
    });

    return stream.bundle()
        .pipe(source('all.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js'
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('src/**/{*.js,*.jsx}', ['js']);
    gulp.watch('src/**/*.less', ['less']);
});

gulp.task('browser-sync', function() {
    browserSync.init(['dist/**/*.*'], {
        proxy: 'http://localhost:3000',
        port: 4000,
        browser: ['google-chrome']
    });
});

gulp.task('build', sequence(['vendors', 'html', 'less', 'js']));
gulp.task('prod', sequence(['vendors', 'html', 'less-prod', 'js-prod']));

gulp.task('default', sequence('build', 'nodemon', 'watch'));
