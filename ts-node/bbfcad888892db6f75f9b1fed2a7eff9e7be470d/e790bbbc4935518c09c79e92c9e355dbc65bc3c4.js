"use strict";
var express = require('express');
var fallback = require('express-history-api-fallback');
var openResource = require('open');
var path_1 = require('path');
var codeChangeTool = require('./code_change_tools');
var config_1 = require('../../config');
function serveSPA() {
    codeChangeTool.listen();
}
exports.serveSPA = serveSPA;
function notifyLiveReload(e) {
    var fileName = e.path;
    codeChangeTool.changed(fileName);
}
exports.notifyLiveReload = notifyLiveReload;
function serveDocs() {
    var server = express();
    server.use(config_1.default.APP_BASE, express.static(path_1.resolve(process.cwd(), config_1.default.DOCS_DEST)));
    server.listen(config_1.default.DOCS_PORT, function () {
        return openResource('http://localhost:' + config_1.default.DOCS_PORT + config_1.default.APP_BASE);
    });
}
exports.serveDocs = serveDocs;
function serveCoverage() {
    var server = express();
    var compression = require('compression');
    server.use(compression());
    server.use(config_1.default.APP_BASE, express.static(path_1.resolve(process.cwd(), 'coverage')));
    server.listen(config_1.default.COVERAGE_PORT, function () {
        return openResource('http://localhost:' + config_1.default.COVERAGE_PORT + config_1.default.APP_BASE);
    });
}
exports.serveCoverage = serveCoverage;
function serveProd() {
    var root = path_1.resolve(process.cwd(), config_1.default.PROD_DEST);
    var server = express();
    var compression = require('compression');
    server.use(compression());
    server.use(config_1.default.APP_BASE, express.static(root));
    server.use(fallback('index.html', { root: root }));
    server.listen(config_1.default.PORT, function () {
        return openResource('http://localhost:' + config_1.default.PORT + config_1.default.APP_BASE);
    });
}
exports.serveProd = serveProd;
;
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/angular2-baseapp/ts-node/bbfcad888892db6f75f9b1fed2a7eff9e7be470d/e790bbbc4935518c09c79e92c9e355dbc65bc3c4.js.map