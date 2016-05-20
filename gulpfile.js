/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Gulp Konfigurationsdatei
 *
 * @author u220374 (Reto Lehmann)
 * @version: 0.0.1
 * @since 23.10.2015, 2015.
 */
var gulp  =   require('gulp');
var path     = require('path');
var webpack  = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var karma    = require('karma');
var esdoc    = require('gulp-esdoc');
var ip = require('ip');
var webpackConfig = require('./webpack.config');
var root = 'src';

/**
 * Hilfsmethode: Dateien vom Pfad app/{glob} erhalten
 * @param glob Pfad nach app/
 * @returns {string} Den Pfad zur Applikation app/{glob}
 */
var resolveToApp = function(glob){
    glob = glob || '';
    return path.join(root, 'app', glob);
};

/**
 * Hilfsmethode: Dateien vom Pfad app/components/{glob} erhalten
 * @param glob Pfad nach app/components/
 * @returns {string} Den Pfad zur Applikation app/components/{glob}
 */
var resolveToComponents = function(glob){
    glob = glob || '';
    return path.join(root, 'app/components', glob);
};

/**
 * Map aller Dateien
 */
var paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // Alle .js ohne .spec.js
    css: resolveToApp('**/*.css'),
    html: [resolveToApp('**/*.html'), path.join(root, 'index.html')],
    entry: path.join(root, 'app/app.js'),
    output: 'dist',
    build: path.join(__dirname, 'target/build'),
    documentation: path.join(__dirname, 'target/documentation')
};

/**
 * Gulp-Task: Kopiert alle statischen Dateien nach /dist
 */
gulp.task('copyHtml', function(){
    return gulp.src(path.join(root, 'index.html')).pipe(gulp.dest(paths.output));
});

/**
 * Gulp-Task: Fuehrt webpack aus und startet den Development-Server
 */
gulp.task('serve', function(){
    return new WebpackDevServer(webpack(webpackConfig.development), {
        hot: true, contentBase: './dist/', watchOptions: {
            aggregateTimeout: 100, poll: 300
        }, stats: {
            colors: true
        }
    }).listen(3000, 'localhost', function (err) {
            if (err) {
                console.error(err);
            }
        });
});

/**
 * Gulp-Task: Fuehrt die Karma-Tests auf dem Selenium Webgrid aus
 */
gulp.task('test-selenium-webgrid', function(done){

    var hostname = process.env.host || ip.address();
    var externalport = process.env.externalport || 7777;

    return new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        hostname: hostname,
        port: externalport,
        browsers: ['SeleniumFF', 'SeleniumCH'] // 'SeleniumIE' Selenium-Grid IE funktioniert zurzeit nicht
    }, done).start();
});

/**
 * Gulp-Task: Fuehrt die Karma-Tests auf dem PhantomJS Browser aus
 */
gulp.task('test-phantomjs', function(done){

    var hostname = process.env.host || ip.address();
    var externalport = process.env.externalport || 7777;

    return new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        hostname: hostname,
        port: externalport,
        browsers: ['PhantomJS']
    }, done).start();
});

/**
 * Gulp-Task: Fuehrt ESDoc aus um die Code-Dokumentation zu erstellen
 */
gulp.task('doc', function(){
    return gulp.src(root).pipe(esdoc({destination: paths.documentation, index: path.join(root, 'README.md')}));
});

/**
 * Gulp-Task: Baut die Applikation fuer das Deployment
 * - Fuehrt die Tests aus
 * - Erstellt die Code-Dokumentation
 * - Erstellt das Webpack-Bundle und kopiert es nach /target/build
 * - Kopiert index.html nach /target/build
 */
gulp.task('build', ['test-selenium-webgrid', 'doc'], function(done){
    gulp.src(path.join(root, 'index.html')).pipe(gulp.dest(paths.build));

    return webpack(webpackConfig.production, done);
});

/**
 * Gulp-Task: Standardfall mit 'gulp' kopiert das HTML nach /dist und startet Webserver
 */
gulp.task('default', ['copyHtml', 'serve']);