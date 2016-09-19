var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function() {
  // css
  gulp.src(['src/assets/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build/assets/js'));

  //js
  gulp.src(['src/assets/css/*.css')
    .pipe(minify())
    .pipe(gulp.dest('build/assets/css'));
});
