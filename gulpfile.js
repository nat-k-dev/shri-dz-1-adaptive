var { src, dest } = require('gulp');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

function bundleCss() {
    return src('./src/**/*.css')
        .pipe(concatCss('style.css'))
        .pipe(autoprefixer({grid: 'autoplace'}))
        .pipe(dest('./build/'));
}

function bundleHtml() {
    return src('./src/src/*.html')
        .pipe(dest('./build/'));
}
  
exports.css = bundleCss;
exports.html = bundleHtml;