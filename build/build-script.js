process.env.BABEL_ENV = 'production'

var fs = require('fs')
var path = require('path')
var zlib = require('zlib')
var rollup = require('rollup')
var uglify = require('uglify-js')
var buble = require('rollup-plugin-buble')
var string = require('rollup-plugin-string')
var vue = require('rollup-plugin-vue')
var version = process.env.VERSION || require('../package.json').version
var banner =
    '/*!\n' +
    ' * Pandora UI v' + version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' Lynzz\n' +
    ' * Released under the MIT License.\n' +
    ' */'
var vueConfig = {
  compileTemplate: true,
  htmlMinifier: {collapseBooleanAttributes: false}
}
// var babelConfig = {
//   exclude: 'node_modules/**'
// }
var stringConfig = {
  include: ['**/*.svg', '**/*.html']
}
var external = [
  'async-validator'
  // 'moment',
  // 'velocity-animate'
]
var globals = {
  'async-validator': 'AsyncValidator'
  // moment: 'moment',
  // 'velocity-animate': 'Velocity'
}
var rollupConfig = {
  entry: 'src/index.js',
  plugins: [
    vue(vueConfig),
    string(stringConfig),
    buble()],
  external: external
}

var file = fs
    .readFileSync('src/index.js', 'utf-8')
    .replace(/version: '[\d\.]+'/, "version: '" + version + "'")

fs.writeFileSync('src/index.js', file)

// CommonJS build.
rollup
.rollup(rollupConfig)
.then(function (bundle) {
  return write('dist/pandora-ui.common.js', bundle.generate({
    format: 'cjs',
    banner: banner,
    globals: globals,
    useStrict: false
  }).code)
})
// ES6 Dev Build
.then(function () {
  return rollup
    .rollup({
      entry: 'src/index.js',
      plugins: [vue(vueConfig), string(stringConfig)],
      external: external
    })
    .then(function (bundle) {
      return write('dist/pandora-ui.js', bundle.generate({
        exports: 'named',
        banner: banner,
        globals: globals,
        useStrict: false
      }).code)
    })
})
// Standalone Dev Build
.then(function () {
  return rollup.rollup(rollupConfig)
  .then(function (bundle) {
    return write('dist/pandora-ui.standalone.js', bundle.generate({
      format: 'umd',
      banner: banner,
      moduleName: 'PandoraUI',
      globals: globals,
      useStrict: false
    }).code)
  })
})
// Standalone Production Build
.then(function () {
  return rollup.rollup(rollupConfig)
  .then(function (bundle) {
    var code, res, map

    code = bundle.generate({
      format: 'umd',
      moduleName: 'PandoraUI',
      banner: banner,
      globals: globals,
      useStrict: false
    }).code

    res = uglify.minify(code, {
      fromString: true,
      outSourceMap: 'pandora-ui.standalone.min.js.map',
      output: {
        preamble: banner,
        ascii_only: true
      }
    })

    // fix uglifyjs sourcemap
    map = JSON.parse(res.map)
    map.sources = ['pandora-ui.standalone.js']
    map.sourcesContent = [code]
    map.file = 'pandora-ui.standalone.min.js'

    return [
      write('dist/pandora-ui.standalone.min.js', res.code),
      write('dist/pandora-ui.standalone.min.js.map', JSON.stringify(map))
    ]
  })
  .then(zip)
})
.catch(function (e) {
  console.log(e)
})

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code))
      resolve()
    })
  })
}

function zip () {
  return new Promise(function (resolve, reject) {
    fs.readFile('dist/pandora-ui.standalone.min.js', function (err, buf) {
      if (err) return reject(err)
      zlib.gzip(buf, function (err, buf) {
        if (err) return reject(err)
        write('dist/pandora-ui.standalone.min.js.gz', buf).then(resolve)
      })
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
