var gulp = require('gulp');
var bower = require('gulp-bower');
var vulcanize = require('gulp-vulcanize');
var connect = require('gulp-connect');

// Combine all resources into a single html file
gulp.task('vulcanize', function () {
    return gulp.src('src/index.html')
        .pipe(vulcanize({dest: 'dist', inline: true}))
        .pipe(gulp.dest('dist'));
});

// LiveReload support
// ==================
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(connect.reload());
});

gulp.task('json', function () {
    gulp.src('./mock-server/*.json')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.html'], ['html']);
    gulp.watch(['./mock-server/*.json'], ['json']);
});

// Public Tasks
// ============
gulp.task('bower', function () { return bower().pipe(gulp.dest('lib/')); });
gulp.task('server', ['connect', 'watch']);
gulp.task('default', ['vulcanize']);