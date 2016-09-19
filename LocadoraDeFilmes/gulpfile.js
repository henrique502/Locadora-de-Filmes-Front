var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babel = require('babelify');
var fs = require('fs')
var gracefulFs = require('graceful-fs')
gracefulFs.gracefulify(fs);



var srcTasks = [
  'browserify-app',
  'less',
  'bootstrap',
  'jquery',
  'copy-bs-fonts'
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
  return gulp.src(['./src/less/main.less','./node_modules/react-datepicker/dist/react-datepicker.css'])
    .pipe(concat('main.less'))
    .pipe(less())
    .pipe(gulp.dest('./release/css/'));
});


gulp.task('browserify-app', function () {
  browserify("src/app.jsx")
  .transform("babelify", {presets: ["react"]})
  .bundle()
  .pipe(fs.createWriteStream("release/js/payablesPageList.js"));
});

//External Libraries
gulp.task('bootstrap', function(){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(concat('bootstrap.js'))
        .pipe(gulp.dest('./release/js/'));
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

function compile(watch) {
  var bundler = watchify(browserify('./src/index.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });
