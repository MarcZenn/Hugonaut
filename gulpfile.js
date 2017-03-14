/*
 * Utilizing gulp/gulp-sass as an asset pipeline & pre-processor for SASS, JS, & images.
 * -----------------------------------------------------------------------------------------
 *
 * Dan Bahrami - "Building a production website with Hugo and GulpJS"
 * http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/
 *
*/
var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del"),
    concat       = require('gulp-concat'),
    imagemin     = require('gulp-imagemin')

/*
 | ----------------------------------------------------
 | Clean destination files before re-compiling.
 |    * templates and styles will be processed in parallel.
 |    * clean will be guaranteed to complete before other tasks start.
 |    * clean will not be run twice, even though it is called as a dependency twice.
 |    * Will also remove additional folders from /public generated by Hugo
 |      until proper solution is found.
 | ----------------------------------------------------
*/
gulp.task("clean", function () {
  return del(["static/js/**/*", "static/images/**/*", "static/css/**/*"]);
});



/*
 | ----------------------------------------------------
 | Hash CSS
 | ----------------------------------------------------
*/
gulp.task("scss", ['clean'], function () {

  var stream = gulp.src("src/scss/**/*.scss")
      .pipe(sass({
          outputStyle : "compressed"
      }))
      .pipe(autoprefixer({
          browsers : ["last 20 versions"]
      }))
      .pipe(hash())
      .pipe(gulp.dest("static/css"))
      .pipe(hash.manifest("hashcss.json")) // Create a hash map
      .pipe(gulp.dest("data/css")) // Put the json map in the data directory

  return stream; // return the stream as for this task's completion hint.
});


/*
 | ----------------------------------------------------
 | Compile Images
 | ----------------------------------------------------
*/
gulp.task("images", ['clean'], function () {

  var stream = gulp.src("src/images/**/*")
      .pipe(imagemin())
      .pipe(gulp.dest("static/images"))
  return stream; // return the stream as for this task's completion hint.
});


/*
 | ----------------------------------------------------
 | Hash Scripts
 | ----------------------------------------------------
*/
gulp.task("js", ['clean'], function () {

  var stream = gulp.src("src/js/**/*.js")
      .pipe(concat("main.js")) // concat into single main.js file
      .pipe(hash())
      .pipe(gulp.dest("static/js"))
      .pipe(hash.manifest("hashjs.json"))
      .pipe(gulp.dest("data/js"))

  return stream; // return the stream as for this task's completion hint.
});

/*
 | ----------------------------------------------------
 | Watch
 | ----------------------------------------------------
*/
gulp.task("watch", ["js", "scss", "images"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
    gulp.watch("src/js/**/*", ["js"])
})

/*
 | ----------------------------------------------------
 | Build asset pipeline
 | ----------------------------------------------------
*/
gulp.task("build", ["js", "scss", "images"]);


/*
 | ----------------------------------------------------
 | Default Gulp task set to build task
 | ----------------------------------------------------
*/
gulp.task("default", ["build"]);
