"use strict";
var util = require('gulp-util');
var rimraf = require('rimraf');
function clean(paths) {
    return function (done) {
        var pathsToClean;
        if (paths instanceof Array) {
            pathsToClean = paths;
        }
        else {
            pathsToClean = [paths];
        }
        var promises = pathsToClean.map(function (p) {
            return new Promise(function (resolve) {
                rimraf(p, function (e) {
                    if (e) {
                        util.log('Clean task failed with', e);
                    }
                    else {
                        util.log('Deleted', util.colors.yellow(p || '-'));
                    }
                    resolve();
                });
            });
        });
        Promise.all(promises).then(function () { return done(); });
    };
}
exports.clean = clean;
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/SB-Admin-BS4-Angular-2/ts-node/f76c5bea620d6bd0afb2d392e85b07b104131212/a773e0c03477702dba0cd53bedd4f2b069bf1430.js.map