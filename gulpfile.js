var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        files: [
            "./exercises/**/*.html",
            "./exercises/**/*.css"
        ],
        server: {
            baseDir: "./exercises"
        }
    });
});

gulp.task('default', gulp.series('browser-sync'));