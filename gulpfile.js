var gulp = require('gulp')
  , gutil = require('gulp-util')
  , concat = require('gulp-concat')
  , rename = require('gulp-rename')
  , jshint = require('gulp-jshint')
  , uglify = require('gulp-uglify')
  , minifycss = require('gulp-minify-css')
  , htmlreplace = require('gulp-html-replace')
  , plumber = require('gulp-plumber')
  , coffee = require('gulp-coffee')
  , connect = require('gulp-connect')
  , paths;

paths = {
  assets: 'src/assets/**/*',
  html:   'src/*.html',
  css:    'src/css/*.css',
  coffee: 'src/coffee/*.coffee',
  js:     ['src/js/*.js', 'src/js/**/*.js', '!src/js/lib/*.js'],
  lib:    'src/js/lib/*.js',
  dist:   './dist/'
};

gulp.task('copy', function () {
  // copy images
  gulp.src(paths.assets).pipe(gulp.dest(paths.dist + 'assets'));

  // copy phaser.js
  gulp.src('src/js/lib/phaser.min.js').pipe(gulp.dest(paths.dist));
});

gulp.task('uglify', ['jshint'], function () {
  gulp.src(paths.js)
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(paths.dist))
    .pipe(uglify({outSourceMaps: false}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('minifycss', function () {
 gulp.src(paths.css)
    .pipe(minifycss({
      keepSpecialComments: false,
      removeEmpty: true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('htmlreplace', function() {
  gulp.src('src/index.html')
    .pipe(htmlreplace({
        'css':    'styles.min.css',
        'js':     'bundle.min.js',
        'phaser': 'phaser.min.js'
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('jshint', function() {
  gulp.src(paths.js)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

// Live reload
gulp.task('html', function(){
  gulp.src('src/*.html')
    .pipe(connect.reload());
});

// Compile Coffee
gulp.task('coffee', function() {
  gulp.src(paths.coffee)
    .pipe(plumber())
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./src/js'))
});

// Start Webserver
gulp.task('connect', function() {
  connect.server({
    root: [__dirname + '/src'],
    port: 9000,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['jshint']);
  gulp.watch(paths.coffee, ['coffee']);
  gulp.watch([paths.html, paths.css, paths.js], ['html']);
});

gulp.task('default', ['coffee', 'connect', 'watch']);
gulp.task('build', ['copy', 'uglify', 'minifycss', 'htmlreplace']);

