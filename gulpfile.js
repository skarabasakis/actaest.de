var gulp = require('gulp');
var sass = require('gulp-sass');
var include = require('gulp-include');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
  return gulp.src('scripts/main.js')
      .pipe(include({
        hardFail: true,
        includePaths: [
            __dirname + "/node_modules",
            __dirname + "/scripts"
        ]
      }))
      .pipe(minify({ext: { min: '.min.js'}}))
      .pipe(gulp.dest('./js'))
      .pipe(browserSync.stream());
});
gulp.task('serve', ['sass', 'scripts'], function () {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./scss/style.scss", ['sass']);
  gulp.watch("./scripts/main.js", ['scripts']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});
