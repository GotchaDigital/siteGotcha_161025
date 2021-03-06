var gulp = require('gulp');

var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var livereload = require('gulp-livereload');

gulp.task( 'styles', function()
{
	gulp.src( 'src/scss/index.scss' )
		.pipe( sass() )
		.pipe( cleanCSS() )
		.pipe( gulp.dest( 'assets/css' ) )
		.pipe( livereload() );
});

gulp.task( 'scripts', function()
{
	gulp.src([
			'src/js/jquery-3.1.1.min.js',
			'src/js/jquery.colorbox-min.js',
			'src/js/*.js'
		])
		.pipe( concat( 'index.js' ) )
		.pipe( minify() )
		.pipe( gulp.dest( 'assets/js' ) )
		.pipe( livereload() );
});

gulp.task( 'html', function()
{
	gulp.src([
			'src/html/header.html',

			'src/html/body/banner.html',
			'src/html/body/cases.html',
			'src/html/body/whatwedo.html',
			'src/html/body/clients.html',
			'src/html/body/contact.html',

			'src/html/footer.html'
			])
		.pipe( concat( 'index.html' ) )
		.pipe( gulp.dest( '' ) )
		.pipe( livereload() );
});


gulp.task( 'watch', function()
{
	livereload.listen();
	gulp.watch( 'src/scss/**/*.scss', [ 'styles' ] );
	gulp.watch( 'src/html/**/*.html', [ 'html' ] );
	gulp.watch( 'src/js/**/*.js', [ 'scripts' ] );
});

gulp.task( 'default', [ 'watch' ] );