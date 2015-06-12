var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');
var sequence    = require('gulp-sequence');
var sourcemaps  = require('gulp-sourcemaps');
var babelify    = require('babelify');
var browserify  = require('browserify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var uglify      = require('gulp-uglify');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');


gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    browserify('./src/js/main.js', { debug: true })
    .transform(babelify)
    .bundle()
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
