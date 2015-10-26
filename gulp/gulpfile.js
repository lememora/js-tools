var amdOptimize = require("amd-optimize");
var eventStream = require("event-stream");
var gulp = require("gulp");
var order = require("gulp-order");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("default", function() {
  eventStream.merge(
    gulp.src("node_modules/almond/almond.js"),
    gulp
      .src("src/*.js")
      .pipe(amdOptimize("main", {
        paths: {
          jquery: "node_modules/jquery/dist/jquery"
        }
      }))
      .pipe(concat("bundle.js"))
  )
  .pipe(order(["**/almond.js", "bundle.js"]))
  .pipe(concat("bundle.min.js"))
  .pipe(uglify())
  .pipe(gulp.dest("."));
});
