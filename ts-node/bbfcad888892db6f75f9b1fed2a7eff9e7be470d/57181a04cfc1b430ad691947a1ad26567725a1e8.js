"use strict";
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var slash = require('slash');
var config_1 = require('../../config');
var utils_1 = require('../../utils');
var plugins = gulpLoadPlugins();
function inject(name) {
    return plugins.inject(gulp.src(getInjectablesDependenciesRef(name), { read: false }), {
        name: name,
        transform: transformPath()
    });
}
function getInjectablesDependenciesRef(name) {
    return config_1.default.DEPENDENCIES
        .filter(function (dep) { return dep['inject'] && dep['inject'] === (name || true); })
        .map(mapPath);
}
function mapPath(dep) {
    var envPath = dep.src;
    if (envPath.startsWith(config_1.default.APP_SRC) && !envPath.endsWith('.scss')) {
        envPath = path_1.join(config_1.default.APP_DEST, envPath.replace(config_1.default.APP_SRC, ''));
    }
    else if (envPath.startsWith(config_1.default.APP_SRC) && envPath.endsWith('.scss')) {
        envPath = envPath.replace(config_1.default.ASSETS_SRC, config_1.default.CSS_DEST).replace('.scss', '.css');
    }
    return envPath;
}
function transformPath() {
    return function (filepath) {
        if (filepath.startsWith("/" + config_1.default.APP_DEST)) {
            filepath = filepath.replace("/" + config_1.default.APP_DEST, '');
        }
        arguments[0] = path_1.join(config_1.default.APP_BASE, filepath) + ("?" + Date.now());
        return slash(plugins.inject.transform.apply(plugins.inject.transform, arguments));
    };
}
module.exports = function () {
    return gulp.src(path_1.join(config_1.default.APP_SRC, 'index.html'))
        .pipe(inject('shims'))
        .pipe(inject('libs'))
        .pipe(inject())
        .pipe(plugins.template(utils_1.templateLocals()))
        .pipe(gulp.dest(config_1.default.APP_DEST));
};
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/angular2-baseapp/ts-node/bbfcad888892db6f75f9b1fed2a7eff9e7be470d/57181a04cfc1b430ad691947a1ad26567725a1e8.js.map