'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat-css');
var clean = require('gulp-clean-css')
var merge = require('merge-stream');

// paths
var scssPath = './src/components/*/*.scss'
var cssPath = './src/components/*/*.css'
var cssOutput = './src/css-files.css'
var scssOutput = './src/scss-files.scss'
var finalOutput = './src/'

gulp.task('default', ['compile-css'])

gulp.task('compile-css', () => {
  var scssStream = gulp.src(scssPath)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(concat(scssOutput));
  
  var cssStream = gulp.src(cssPath)
      .pipe(concat(cssOutput));

  return merge(scssStream, cssStream)
      .pipe(concat('styles.css'))
      .pipe(clean({ level: 1 }))
      .pipe(gulp.dest(finalOutput))
})

gulp.task('watch', () => {
  gulp.watch(scssPath, ['compile-css'])
})