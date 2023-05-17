const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'development',
    devtool:'inline-source-map',
    entry:{
        main:'./entry.js'
    },
    output:{
        iife:true,
        clean:true,
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    watchOptions:{
        ignored:['**/node_modules']
    },
    devServer:{
      port:8080,hot:true, // dev server port and HMR
      watchFiles:['**/src/backend/*'],
      static: [
        {
          directory:path.resolve(__dirname, 'public'), // fix public directory to the project root
          watch:true, // weather or not a static folder is watched
          publicPath:"/" //decides where a static file will be served from
        },
        {
          directory:path.resolve(__dirname, 'style'),
          watch:false,
          publicPath:'/style/', // string that will be prefixed to a file path.
          serveIndex:false, // default true
          staticOptions:{
            index:'about.html'
          }
        }

      ]
    }
}