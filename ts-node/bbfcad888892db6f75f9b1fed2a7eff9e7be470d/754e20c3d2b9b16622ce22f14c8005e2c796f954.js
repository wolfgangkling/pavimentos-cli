"use strict";
var path_1 = require('path');
var slash = require('slash');
var yargs_1 = require('yargs');
exports.ENVIRONMENTS = {
    DEVELOPMENT: 'dev',
    PRODUCTION: 'prod'
};
var SeedConfig = (function () {
    function SeedConfig() {
        this.PORT = yargs_1.argv['port'] || 5555;
        this.PROJECT_ROOT = path_1.join(__dirname, '../..');
        this.ENV = getEnvironment();
        this.DEBUG = yargs_1.argv['debug'] || false;
        this.DOCS_PORT = yargs_1.argv['docs-port'] || 4003;
        this.COVERAGE_PORT = yargs_1.argv['coverage-port'] || 4004;
        this.COVERAGE_DIR = 'coverage';
        this.APP_BASE = yargs_1.argv['base'] || '/';
        this.NPM_BASE = slash(path_1.join(this.APP_BASE, 'node_modules/'));
        this.ENABLE_HOT_LOADING = yargs_1.argv['hot-loader'];
        this.HOT_LOADER_PORT = 5578;
        this.TYPED_COMPILE_INTERVAL = 0;
        this.BOOTSTRAP_DIR = yargs_1.argv['app'] || 'app';
        this.APP_CLIENT = yargs_1.argv['client'] || 'client';
        this.BOOTSTRAP_MODULE = (this.BOOTSTRAP_DIR + "/") + (this.ENABLE_HOT_LOADING ? 'hot_loader_main' : 'main');
        this.BOOTSTRAP_PROD_MODULE = (this.BOOTSTRAP_DIR + "/") + 'main';
        this.NG_FACTORY_FILE = 'main-prod';
        this.BOOTSTRAP_FACTORY_PROD_MODULE = this.BOOTSTRAP_DIR + "/" + this.NG_FACTORY_FILE;
        this.APP_TITLE = 'Nombre aplicación';
        this.APP_SRC = "src/" + this.APP_CLIENT;
        this.ASSETS_SRC = this.APP_SRC + "/assets";
        this.CSS_SRC = this.APP_SRC + "/assets/sass";
        this.TOOLS_DIR = 'tools';
        this.SEED_TASKS_DIR = path_1.join(process.cwd(), this.TOOLS_DIR, 'tasks', 'seed');
        this.DOCS_DEST = 'docs';
        this.DIST_DIR = 'dist';
        this.DEV_DEST = this.DIST_DIR + "/dev";
        this.PROD_DEST = this.DIST_DIR + "/prod";
        this.TMP_DIR = this.DIST_DIR + "/tmp";
        this.APP_DEST = this.ENV === exports.ENVIRONMENTS.DEVELOPMENT ? this.DEV_DEST : this.PROD_DEST;
        this.CSS_DEST = this.APP_DEST + "/css";
        this.JS_DEST = this.APP_DEST + "/js";
        this.VERSION = appVersion();
        this.CSS_PROD_BUNDLE = 'main.css';
        this.JS_PROD_SHIMS_BUNDLE = 'shims.js';
        this.JS_PROD_APP_BUNDLE = 'app.js';
        this.VERSION_NPM = '2.14.2';
        this.VERSION_NODE = '4.0.0';
        this.CODELYZER_RULES = customRules();
        this.ENABLE_SCSS = yargs_1.argv['scss'] || true;
        this.NPM_DEPENDENCIES = [
            { src: 'zone.js/dist/zone.js', inject: 'libs' },
            { src: 'core-js/client/shim.min.js', inject: 'shims' },
            { src: 'systemjs/dist/system.src.js', inject: 'shims', env: exports.ENVIRONMENTS.DEVELOPMENT },
            { src: 'rxjs/bundles/Rx.min.js', inject: 'libs', env: exports.ENVIRONMENTS.DEVELOPMENT },
        ];
        this.APP_ASSETS = [];
        this.TEMP_FILES = [
            '**/*___jb_tmp___',
            '**/*~',
        ];
        this.SYSTEM_CONFIG_DEV = {
            defaultJSExtensions: true,
            packageConfigPaths: [
                "/node_modules/*/package.json",
                "/node_modules/**/package.json",
                "/node_modules/@angular/*/package.json"
            ],
            paths: (_a = {},
                _a[this.BOOTSTRAP_MODULE] = "" + this.APP_BASE + this.BOOTSTRAP_MODULE,
                _a['@angular/common'] = 'node_modules/@angular/common/bundles/common.umd.js',
                _a['@angular/compiler'] = 'node_modules/@angular/compiler/bundles/compiler.umd.js',
                _a['@angular/core'] = 'node_modules/@angular/core/bundles/core.umd.js',
                _a['@angular/forms'] = 'node_modules/@angular/forms/bundles/forms.umd.js',
                _a['@angular/http'] = 'node_modules/@angular/http/bundles/http.umd.js',
                _a['@angular/platform-browser'] = 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                _a['@angular/platform-browser-dynamic'] = 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                _a['@angular/router'] = 'node_modules/@angular/router/bundles/router.umd.js',
                _a['@angular/common/testing'] = 'node_modules/@angular/common/bundles/common-testing.umd.js',
                _a['@angular/compiler/testing'] = 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
                _a['@angular/core/testing'] = 'node_modules/@angular/core/bundles/core-testing.umd.js',
                _a['@angular/http/testing'] = 'node_modules/@angular/http/bundles/http-testing.umd.js',
                _a['@angular/platform-browser/testing'] = 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
                _a['@angular/platform-browser-dynamic/testing'] = 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
                _a['@angular/router/testing'] = 'node_modules/@angular/router/bundles/router-testing.umd.js',
                _a['rxjs/*'] = 'node_modules/rxjs/*',
                _a['app/*'] = '/app/*',
                _a['dist/dev/*'] = '/base/dist/dev/*',
                _a['*'] = 'node_modules/*',
                _a
            ),
            packages: {
                rxjs: { defaultExtension: 'js' }
            }
        };
        this.SYSTEM_CONFIG = this.SYSTEM_CONFIG_DEV;
        this.SYSTEM_BUILDER_CONFIG = {
            defaultJSExtensions: true,
            base: this.PROJECT_ROOT,
            packageConfigPaths: [
                path_1.join('node_modules', '*', 'package.json'),
                path_1.join('node_modules', '@angular', '*', 'package.json')
            ],
            paths: (_b = {},
                _b[path_1.join(this.TMP_DIR, 'app', '*')] = this.TMP_DIR + "/app/*",
                _b['*'] = 'node_modules/*',
                _b
            ),
            packages: {
                '@angular/common': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/compiler': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/core/testing': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/core': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/forms': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/http': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/platform-browser': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/platform-browser-dynamic': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                '@angular/router': {
                    main: 'index.js',
                    defaultExtension: 'js'
                },
                'rxjs': {
                    main: 'Rx.js',
                    defaultExtension: 'js'
                }
            }
        };
        this.BROWSER_LIST = [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ];
        this.COLOR_GUARD_WHITE_LIST = [];
        this.PLUGIN_CONFIGS = {
            'browser-sync': {
                middleware: [require('connect-history-api-fallback')({
                        index: this.APP_BASE + "index.html"
                    })],
                port: this.PORT,
                startPath: this.APP_BASE,
                open: yargs_1.argv['b'] ? false : true,
                injectChanges: false,
                server: {
                    baseDir: this.DIST_DIR + "/empty/",
                    routes: (_c = {},
                        _c["" + this.APP_BASE + this.APP_SRC] = this.APP_SRC,
                        _c["" + this.APP_BASE + this.APP_DEST] = this.APP_DEST,
                        _c[this.APP_BASE + "node_modules"] = 'node_modules',
                        _c["" + this.APP_BASE.replace(/\/$/, '')] = this.APP_DEST,
                        _c
                    )
                }
            },
            'environment-config': path_1.join(this.PROJECT_ROOT, this.TOOLS_DIR, 'env'),
            'gulp-sass': {
                includePaths: ['./node_modules/']
            },
            'gulp-concat-css': {
                targetFile: this.CSS_PROD_BUNDLE,
                options: {
                    rebaseUrls: false
                }
            }
        };
        var _a, _b, _c;
    }
    Object.defineProperty(SeedConfig.prototype, "DEPENDENCIES", {
        get: function () {
            return normalizeDependencies(this.NPM_DEPENDENCIES.filter(filterDependency.bind(null, this.ENV)))
                .concat(this.APP_ASSETS.filter(filterDependency.bind(null, this.ENV)));
        },
        enumerable: true,
        configurable: true
    });
    SeedConfig.prototype.mergeObject = function (target, source) {
        var deepExtend = require('deep-extend');
        deepExtend(target, source);
    };
    SeedConfig.prototype.getPluginConfig = function (pluginKey) {
        if (this.PLUGIN_CONFIGS[pluginKey]) {
            return this.PLUGIN_CONFIGS[pluginKey];
        }
        return null;
    };
    SeedConfig.prototype.getInjectableStyleExtension = function () {
        return this.ENV === exports.ENVIRONMENTS.PRODUCTION && this.ENABLE_SCSS ? 'scss' : 'css';
    };
    return SeedConfig;
}());
exports.SeedConfig = SeedConfig;
function normalizeDependencies(deps) {
    deps
        .filter(function (d) { return !/\*/.test(d.src); })
        .forEach(function (d) { return d.src = require.resolve(d.src); });
    return deps;
}
exports.normalizeDependencies = normalizeDependencies;
function filterDependency(env, d) {
    if (!d.env) {
        d.env = Object.keys(exports.ENVIRONMENTS).map(function (k) { return exports.ENVIRONMENTS[k]; });
    }
    if (!(d.env instanceof Array)) {
        d.env = [d.env];
    }
    return d.env.indexOf(env) >= 0;
}
function appVersion() {
    var pkg = require('../../package.json');
    return pkg.version;
}
function customRules() {
    var lintConf = require('../../tslint.json');
    return lintConf.rulesDirectory;
}
function getEnvironment() {
    var base = yargs_1.argv['_'];
    var prodKeyword = !!base.filter(function (o) { return o.indexOf(exports.ENVIRONMENTS.PRODUCTION) >= 0; }).pop();
    var env = (yargs_1.argv['env'] || '').toLowerCase();
    if ((base && prodKeyword) || env === exports.ENVIRONMENTS.PRODUCTION) {
        return exports.ENVIRONMENTS.PRODUCTION;
    }
    else {
        return exports.ENVIRONMENTS.DEVELOPMENT;
    }
}
//# sourceMappingURL=/Users/wolfgangkling/Dropbox/Recaudo_Bogota/2017/Angular/angular2-baseapp/ts-node/bbfcad888892db6f75f9b1fed2a7eff9e7be470d/754e20c3d2b9b16622ce22f14c8005e2c796f954.js.map