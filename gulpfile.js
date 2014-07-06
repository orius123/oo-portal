var gulp = require('gulp');
var bower = require('gulp-bower');
var vulcanize = require('gulp-vulcanize');

gulp.task('default', function () {
    return gulp.src('src/index.html')
        .pipe(vulcanize({dest: 'dist', inline : true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest('lib/'));
});