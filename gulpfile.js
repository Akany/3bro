var gulp = require('gulp'),
	exec = require('child_process').exec;;

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('start', function () {
	exec('npm start');
});