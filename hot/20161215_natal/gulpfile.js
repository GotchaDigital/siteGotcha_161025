var gulp 		= require('gulp');

var fileinclude = require('gulp-file-include');
var sass 		= require('gulp-sass');
var livereload 	= require('gulp-livereload');

// renderiza o html
gulp.task( 'html', function()
{
	gulp.src( ['src/html/*.html'] )
		.pipe( fileinclude() )
		.pipe( gulp.dest('') )
		.pipe( livereload() );
});

// renderiza o css
gulp.task( 'styles', function()
{
	gulp.src( 'src/sass/index.scss' )
		.pipe( sass() )
		.pipe( gulp.dest( 'assets/css' ) )
		.pipe( livereload() );
});

// renderiza o JS
gulp.task( 'scripts', function()
{
	gulp.src( 'src/js/**/*.js' )
		.pipe( gulp.dest( 'assets/js' ) )
		.pipe( livereload() );
});

// watch do sistema
gulp.task( 'default', function()
{
	livereload.listen();
	gulp.watch( 'src/html/**/*.html', [ 'html' ] );
	gulp.watch( 'src/sass/**/*.scss', [ 'styles' ] );
	gulp.watch( 'src/js/**/*.js', [ 'scripts' ] );
});