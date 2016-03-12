var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('build',function(){
  gulp.src('./public/js/app.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('./public/js/build'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload','build']);
});

gulp.task('default', ['build', 'watch', 'sass','connect']);