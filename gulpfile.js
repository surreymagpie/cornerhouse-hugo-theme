var gulp  = require('gulp'),
    sass  = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('sass/styles.sass')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
