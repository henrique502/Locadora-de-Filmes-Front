var babel = require('babelify');
var babelify = require("babelify");
var browserify = require('browserify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var gracefulFs = require('graceful-fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var buffer = require('vinyl-buffer');
var gulpify = require('gulpify')
var less = require('gulp-less');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var imagemin = require('gulp-imagemin');


var srcTasks = [
  'browserify-app',
  //'imagemin',
  'less',
  'bootstrap',
  'bootstrap-css',
  'jquery',
  'copy-bs-fonts',
  //'minify-css'
];

//Less Tasks:
var lessTasks = [
  'less'
];


//Browserify Tasks:
var browserifyTasks = [
  'browserify-app'
];

//Gulp Package
gulp.task('go', ['minify-css'], function() {});

//Minify Css
gulp.task('minify-css', ['uglify'], function() {
  return gulp.src('./release/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./release/css/'));
});

//Uglify
gulp.task('uglify', ['imagemin'], function() {
  return gulp.src('./release/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./release/js/'));
});

//Minify Image
gulp.task('imagemin', srcTasks, function() {
 return gulp.src('src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('release/img/'));
});

//LESS
gulp.task('less', function(){
  return gulp.src(['./src/less/main.less'])
    .pipe(concat('main.less'))
    .pipe(less())
    .pipe(gulp.dest('./release/css/'));
});


gulp.task('browserify-app', function () {
  var bundleStream = browserify("src/app.js").transform("babelify", {
    presets: ["es2015", "react"]
  }).bundle();

  bundleStream
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./release/js'));
    //.pipe(fs.createWriteStream("release/js/app.js"));
});

//External Libraries
gulp.task('bootstrap', function(){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(concat('bootstrap.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./release/js/'));
});

//External Libraries
gulp.task('bootstrap-css', function(){
  return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./release/css/'));
});

//font
gulp.task('copy-bs-fonts', function(){
  return gulp.src('./node_modules/bootstrap/dist/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('./release/fonts/'));
});

/* jquery */
gulp.task('jquery', function(){
    return gulp.src('./node_modules/jquery/dist/jquery.js')
        .pipe(concat('jquery.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./release/js/'));
});

//Watch Gulp - Default
gulp.task('default', srcTasks, function(){
  //Css manager
  gulp.watch('./src/less/*.less', lessTasks);

  //img manager
  gulp.watch('./src/img/*', srcTasks);

  //Js manager
  gulp.watch('./src/js/*', browserifyTasks);
  gulp.watch('./src/js/*/*', browserifyTasks);
});
