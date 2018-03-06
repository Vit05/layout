var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    reload = browserSync.reload,
    minifyjs = require('gulp-js-minify'),
    plumber = require('gulp-plumber');


//CURRENT PATH
var currentPath = 'true-a';

var path = {
    build: {
        html: 'public/' + currentPath + '/',
        js: 'public/' + currentPath + '/js/',
        css: 'public/' + currentPath + '/css/',
        img: 'public/' + currentPath + '/img/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/' + currentPath + '/*.html',
        js: 'src/' + currentPath + '/js/common/*.js',
        styles: 'src/' + currentPath + '/styles/**/*.scss',
        img: 'src/' + currentPath + '/img/**/*.*'
    },
    watch: {
        html: 'src/' + currentPath + '/**/*.html',
        js: 'src/' + currentPath + '/js/**/*.js',
        styles: 'src/' + currentPath + '/styles/**/*.scss',
        img: 'src/' + currentPath + '/img/**/*.*'
    },
    clean: './public/' + currentPath + '/'
};


//WATCH
gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.styles], function (event, cb) {
        gulp.start('styles:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
});


//HTML
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});


//WEBSERVER
var serverConfig = {
    server: {
        baseDir: './public/' + currentPath + ''
    },
    tunnel: true,
    host: 'localhost',
    port: 5000
};
gulp.task('webserver', function () {
    browserSync(serverConfig);
});

//STYLES
gulp.task('styles:build', function () {
    gulp.src(path.src.styles)
        .pipe(plumber())
        .pipe(sass({
            includePaths: require('node-reset-scss').includePath,
        })) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(rename({suffix: '.min'})).pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});

//CLEAN
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

//IMAGES
gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

//JAVASCRIPT
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(concat('common.js'))
        .pipe(uglify())
        .pipe(minifyjs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

//TASKS
gulp.task('build', [
    'html:build',
    'js:build',
    'styles:build',
    'image:build'

]);


gulp.task('default', ['build', 'webserver', 'watch']);
