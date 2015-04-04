var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('./_sass/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./_sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'], function() {});
