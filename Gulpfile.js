'use strict';

var gulp   = require('gulp');
var clean  = require('gulp-clean');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('clean', function(){
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp
  .task('copy', function(){
    gulp.src('./src/spice.binding.js')
      .pipe(gulp.dest('./dist/'));
  })
  .task('minify', function(){
    gulp.src('./src/spice.binding.js')
      .pipe(uglify())
      .pipe(rename('spice.binding.min.js'))
      .pipe(gulp.dest('./dist/'));
  })
  .task('build', ['copy', 'minify']);

gulp.task('default', ['build']);
