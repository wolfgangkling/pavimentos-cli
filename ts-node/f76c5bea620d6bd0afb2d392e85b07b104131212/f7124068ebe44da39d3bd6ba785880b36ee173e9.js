"use strict";
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var config_1 = require('../../config');
var plugins = gulpLoadPlugins();
module.exports = function () {
    var src = [
        path_1.join(config_1.default.APP_SRC, '**/*.ts'),
        '!' + path_1.join(config_1.default.APP_SRC, '**/*.d.ts'),
        path_1.join(config_1.default.TOOLS_DIR, '**/*.ts'),
        '!' + path_1.join(config_1.default.TOOLS_DIR, '**/*.d.ts')
    ];
    return gulp.src(src)
        .pipe(plugins.tslint({
        rulesDirectory: config_1.default.CODELYZER_RULES
    }))
        .pipe(plugins.tslint.report({
        emitError: require('is-ci')
    }));
};
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/SB-Admin-BS4-Angular-2/ts-node/f76c5bea620d6bd0afb2d392e85b07b104131212/f7124068ebe44da39d3bd6ba785880b36ee173e9.js.map