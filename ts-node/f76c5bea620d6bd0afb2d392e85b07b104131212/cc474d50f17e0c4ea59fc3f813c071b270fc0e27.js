"use strict";
var gulp = require('gulp');
var util = require('gulp-util');
var runSequence = require('run-sequence');
var config_1 = require('./tools/config');
var utils_1 = require('./tools/utils');
gulp.src('node_modules/moment/moment.js')
    .pipe(gulp.dest('./node_modules'));
utils_1.loadTasks(config_1.default.SEED_TASKS_DIR);
utils_1.loadTasks(config_1.default.PROJECT_TASKS_DIR);
gulp.task('build.dev', function (done) {
    return runSequence('tslint', 'build.fonts', 'build.assets.dev', 'build.html_css', 'build.js.dev', 'build.index.dev', done);
});
gulp.task('build.dev.watch', function (done) {
    return runSequence('build.dev', 'watch.dev', done);
});
gulp.task('build.e2e', function (done) {
    return runSequence('clean.dev', 'tslint', 'build.assets.dev', 'build.js.e2e', 'build.index.dev', done);
});
gulp.task('build.prod', function (done) {
    return runSequence('clean.prod', 'tslint', 'build.fonts', 'build.assets.prod', 'build.html_css', 'copy.prod', 'build.js.prod', 'build.bundles', 'build.bundles.app', 'minify.bundles', 'build.index.prod', done);
});
gulp.task('build.prod.exp', function (done) {
    return runSequence('clean.prod', 'tslint', 'css-lint', 'build.assets.prod', 'build.html_css', 'copy.prod', 'compile.ahead.prod', 'build.js.prod.exp', 'build.bundles', 'build.bundles.app.exp', 'minify.bundles', 'build.index.prod', done);
});
gulp.task('build.test', function (done) {
    return runSequence('clean.once', 'tslint', 'build.fonts', 'build.assets.dev', 'build.html_css', 'build.js.dev', 'build.js.test', 'build.index.dev', done);
});
gulp.task('test.watch', function (done) {
    return runSequence('build.test', 'watch.test', 'karma.watch', done);
});
gulp.task('build.tools', function (done) {
    return runSequence('clean.tools', 'build.js.tools', done);
});
gulp.task('serve.dev', function (done) {
    return runSequence('build.dev', 'server.start', 'watch.dev', done);
});
gulp.task('serve.e2e', function (done) {
    return runSequence('build.e2e', 'server.start', 'watch.e2e', done);
});
gulp.task('serve.prod', function (done) {
    return runSequence('build.prod', 'server.prod', done);
});
gulp.task('test', function (done) {
    return runSequence('build.test', 'karma.run', done);
});
var firstRun = true;
gulp.task('clean.once', function (done) {
    if (firstRun) {
        firstRun = false;
        runSequence('clean.dev', 'clean.coverage', done);
    }
    else {
        util.log('Skipping clean on rebuild');
        done();
    }
});
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/SB-Admin-BS4-Angular-2/ts-node/f76c5bea620d6bd0afb2d392e85b07b104131212/cc474d50f17e0c4ea59fc3f813c071b270fc0e27.js.map