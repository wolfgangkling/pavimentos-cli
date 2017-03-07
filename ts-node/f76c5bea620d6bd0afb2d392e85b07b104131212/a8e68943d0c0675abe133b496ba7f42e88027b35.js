"use strict";
var fs_1 = require('fs');
var gulp = require('gulp');
var util = require('gulp-util');
var isstream = require('isstream');
var path_1 = require('path');
var tildify = require('tildify');
function loadTasks(path) {
    util.log('Loading tasks folder', util.colors.yellow(path));
    readDir(path, function (taskname) { return registerTask(taskname, path); });
}
exports.loadTasks = loadTasks;
function registerTask(taskname, path) {
    var TASK = path_1.join(path, taskname);
    util.log('Registering task', util.colors.yellow(tildify(TASK)));
    gulp.task(taskname, function (done) {
        var task = require(TASK);
        if (task.length > 0) {
            return task(done);
        }
        var taskReturnedValue = task();
        if (isstream(taskReturnedValue)) {
            return taskReturnedValue;
        }
        done();
    });
}
function readDir(root, cb) {
    if (!fs_1.existsSync(root)) {
        return;
    }
    walk(root);
    function walk(path) {
        var files = fs_1.readdirSync(path);
        for (var i = 0; i < files.length; i += 1) {
            var file = files[i];
            var curPath = path_1.join(path, file);
            if (fs_1.lstatSync(curPath).isFile() && /\.ts$/.test(file)) {
                var taskname = file.replace(/\.ts$/, '');
                cb(taskname);
            }
        }
    }
}
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/SB-Admin-BS4-Angular-2/ts-node/f76c5bea620d6bd0afb2d392e85b07b104131212/a8e68943d0c0675abe133b496ba7f42e88027b35.js.map