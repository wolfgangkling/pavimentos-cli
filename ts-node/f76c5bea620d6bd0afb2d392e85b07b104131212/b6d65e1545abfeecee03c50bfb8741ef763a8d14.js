"use strict";
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var merge = require('merge-stream');
var util = require('gulp-util');
var path_1 = require('path');
var config_1 = require('../../config');
var utils_1 = require('../../utils');
var plugins = gulpLoadPlugins();
var jsonSystemConfig = JSON.stringify(config_1.default.SYSTEM_CONFIG_DEV);
var typedBuildCounter = config_1.default.TYPED_COMPILE_INTERVAL;
module.exports = function () {
    var tsProject;
    var typings = gulp.src([
        config_1.default.TOOLS_DIR + '/manual_typings/**/*.d.ts'
    ]);
    var src = [
        path_1.join(config_1.default.APP_SRC, '**/*.ts'),
        '!' + path_1.join(config_1.default.APP_SRC, '**/*.spec.ts'),
        '!' + path_1.join(config_1.default.APP_SRC, '**/*.e2e-spec.ts'),
        '!' + path_1.join(config_1.default.APP_SRC, "**/" + config_1.default.BOOTSTRAP_FACTORY_PROD_MODULE + ".ts")
    ];
    var projectFiles = gulp.src(src);
    var result;
    var isFullCompile = true;
    if (typedBuildCounter < config_1.default.TYPED_COMPILE_INTERVAL) {
        isFullCompile = false;
        tsProject = utils_1.makeTsProject({ isolatedModules: true });
        projectFiles = projectFiles.pipe(plugins.cached());
        util.log('Performing typeless TypeScript compile.');
    }
    else {
        tsProject = utils_1.makeTsProject();
        projectFiles = merge(typings, projectFiles);
    }
    result = projectFiles
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.typescript(tsProject))
        .on('error', function () {
        typedBuildCounter = config_1.default.TYPED_COMPILE_INTERVAL;
    });
    if (isFullCompile) {
        typedBuildCounter = 0;
    }
    else {
        typedBuildCounter++;
    }
    return result.js
        .pipe(plugins.sourcemaps.write())
        .pipe(plugins.template(Object.assign(utils_1.templateLocals(), {
        SYSTEM_CONFIG_DEV: jsonSystemConfig
    })))
        .pipe(gulp.dest(config_1.default.APP_DEST));
};
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/SB-Admin-BS4-Angular-2/ts-node/f76c5bea620d6bd0afb2d392e85b07b104131212/b6d65e1545abfeecee03c50bfb8741ef763a8d14.js.map