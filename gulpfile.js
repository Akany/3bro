var gulp = require('gulp'),
	exec = require('child_process').exec;;

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('install', function() {
  exec('npm install', function (error) {
  	if (error) {
  		console.log('npm isntall erorr');
  	}

  	gulp.src('node_modules/angular/angular.js')
		.pipe(gulp.dest('public/javascripts/vendor/'));
  });
});

gulp.task('start', function () {
	exec('npm start');
});