var gulp = require('gulp')
var less = require('gulp-less')
var banner = require('gulp-banner')
var rename = require('gulp-rename')
var LessAutoprefix = require('less-plugin-autoprefix')

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] })
var pkg = require('../package.json')
var comment =
  '/*!\n' +
  ' * Pandora UI v <%= pkg.version %>' + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' <%= pkg.author %>\n' +
  ' * Released under the MIT License.\n' +
  ' */\n'

gulp.task('less', function () {
  return gulp.src('./src/style/index.less')
    .pipe(banner(comment, {pkg: pkg}))
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(rename('pandora-ui.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.start('less')
