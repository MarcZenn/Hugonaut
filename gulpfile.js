/*
 * Utilizing gulp/gulp-sass as an asset pipeline/pre-processor for SASS, JS, & images.
 * -----------------------------------------------------------------------------------------
 *
 * Dan Bahrami - Building a production website with Hugo and GulpJS
 * http://danbahrami.io/articles/building-a-production-website-with-hugo-and-gulp-js/
 *
*/
var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del")


// Hash css
gulp.task("scss", function () {

  del(["static/css/**/*"])            // Delete our old css files

  gulp.src("src/scss/**/*.scss")
      .pipe(sass({
          outputStyle : "compressed"
      }))
      .pipe(autoprefixer({
          browsers : ["last 20 versions"]
      }))
      .pipe(hash())
      .pipe(gulp.dest("static/css"))
      .pipe(hash.manifest("hash.json")) // Create a hash map
      .pipe(gulp.dest("data/css"))      // Put the map in the data directory
});

// Hash images
gulp.task("images", function () {
  del(["static/images/**/*"])
  gulp.src("src/images/**/*")
      .pipe(hash())
      .pipe(gulp.dest("static/images"))
      .pipe(hash.manifest("hash.json"))
      .pipe(gulp.dest("data/images"))
})

// Hash javascript
gulp.task("js", function () {
  del(["static/js/**/*"])
  gulp.src("src/js/**/*")
      .pipe(hash())
      .pipe(gulp.dest("static/js"))
      .pipe(hash.manifest("hash.json"))
      .pipe(gulp.dest("data/js"))
})

// Build asset pipeline
gulp.task("build", ["scss", "images", "js"])

// Watch asset folder for changes
gulp.task("watch", ["scss", "images", "js"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
    gulp.watch("src/js/**/*", ["js"])
})

// Set build as default task
gulp.task("default", ["build"]);
