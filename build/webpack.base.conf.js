var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var md = require('markdown-it')()
var striptags = require('./strip-tags')
var wrap = function (render) {
  return function () {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}
function convert (str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}
module.exports = {
  entry: {
    example: './examples/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../examples/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vueMarkdown: {
    use: [
      [require('markdown-it-toc-and-anchor').default, {
        anchorLinkSymbol: '',
        anchorClassName: 'anchor'
      }],
      [require('markdown-it-container'), 'demo', {
        validate: function (params) {
          return params.trim().match(/^demo\s*(.*)$/)
        },

        render: function (tokens, idx) {
          var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
          if (tokens[idx].nesting === 1) {
            var description = (m && m.length > 1) ? m[1] : ''
            var html = convert(striptags(tokens[idx + 1].content, 'script'))
            var descriptionHTML = description
              ? '<div class="description">' + md.render(description) + '</div>'
              : ''
            return `<demo-block class="demo-box">
                      <div class="source">${html}</div>
                      <div class="meta">
                        ${descriptionHTML}
                        <div class="highlight">`
          }
          return '</div></div></demo-block>\n'
        }
      }]
    ],
    preprocess: function (MarkdownIt, source) {
      MarkdownIt.renderer.rules.table_open = function () {
        return '<table class="table">'
      }
      MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence)
      return source
    }
  }
}
