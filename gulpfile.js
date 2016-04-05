var gulp = require('gulp'),
	kss = require('kss'),
	del = require('del'),
	fs = require("fs"),
	rucksack = require('gulp-rucksack'), //PostCSS CSS super powers library: http://simplaio.github.io/rucksack/docs/
	rename = require('gulp-rename'),
	sourcemaps   = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),

	sass = require('gulp-sass'),
	bulkSass = require('gulp-sass-bulk-import'),
	postcss      = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cleanCSS = require('gulp-clean-css'),

	jshint = require('gulp-jslint'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');



/**
 * Live browser previews
 */
gulp.task('browserSync', function() {
	browserSync.init({
		open: 'external',
		host: 'localhost',
		proxy: "localhost/YOUR_PROJECT",
		watchTask: true
	})
});


/**
 * Clean out the current KSS styleguide folders
 */
gulp.task('clean:kss', function() {
	return del(['styleguide/**/*'])
});

/**
 * Create fresh documentation by reading through our sass files
 * @param callback | function
 */
gulp.task('kss', ['clean:kss'], function(callback) {
	return kss(JSON.parse(fs.readFileSync("kssconf.json")), callback);
});

/**
 * Move pure from node_modules into our distribution folder
 * We don't want to edit this file, as there's no real need with such a small framework
 */
gulp.task('pure', function() {
	return gulp.src('node_modules/purecss/build/pure.css')
		.pipe(rename({
			suffix: '.src'
		}))
		.pipe(gulp.dest('css/src'))
});


/**
 * Compile sass, allowing for wildcard @imports. Then run autoprefixer on the output
 * so that we don't have to manually write browser prefixes
 * Use sourcemaps so that we know where things have come from when using these files
 */
gulp.task('make-css', function() {
	return gulp.src('build/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(bulkSass())
		.pipe(sass()) // Using gulp-sass
		.pipe(rename({
			suffix: '.src'
		}))
		.pipe(gulp.dest('css/src'))
		.pipe(rucksack())
		.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('css/src'))
});



/**
 * Minify CSS using cleanCSS, and output to an all.min file.
 * We want to keep our unminfied versions in case we want to use them for dev
 * NOTE: We specify our sources by hand so that they will be in the correct order
 */
gulp.task('minify-css', ['make-css'], function() {
	return gulp.src([
			'css/src/pure.src.css',
			'css/src/style.src.css'
		])
		.pipe(cleanCSS({compatibility: 'ie9'}))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css'))
});


/**
 * Minify editor.css and move into css root
 * NOTE: we aren't renaming the file, as silverstripe looks for editor.css by default
 */
gulp.task('cms-css', ['make-css', 'minify-css'], function() {
	return gulp.src('css/src/editor.css')
		.pipe(cleanCSS({compatibility: 'ie9'}))
		.pipe(gulp.dest('css'))
});


/**
 * Get all .src.js files in build/modules and build/js
 * Run them through jslinting, concat into a single file, uglify,
 * and save as a script.min file
 */
gulp.task('make-js', function() {
	return gulp.src([
			'build/components/**/*.src.js',
			'build/js/**/*.src.js'
		])
		.pipe(jshint({
			white: true,
			global: ['jQuery'],
		}))
		.pipe(sourcemaps.init())
		.pipe(concat('script.src.js'))
		.pipe(gulp.dest('js/src/'))
		.pipe(uglify())
		.pipe(rename('script.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('js'))
});


/**
 * Include libraries by hand to allow for specific ordering
 * Skip linting, as these are likely not our own files
 */
gulp.task('make-js-lib', function() {
	return gulp.src([
			'build/js/lib/html5shiv-printshiv.js',
			'build/js/lib/jquery-2.2.2.js',
			'build/js/lib/modernizr.min.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('script.js'))
		.pipe(gulp.dest('js/src/'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('js'))
});


gulp.task('watch', ['pure', 'make-css', 'minify-css', 'cms-css', 'make-js', 'make-js-lib', 'browserSync'], function () {
	gulp.watch('build/sass/**/*.scss', ['make-css', 'minify-css', 'cms-css', browserSync.reload]); //watch sass in project sass folder, run tasks
	gulp.watch('build/js/**/*.js', ['make-js', browserSync.reload]);  //watch js in project js folder, run tasks
})


gulp.task('default', ['watch']);
