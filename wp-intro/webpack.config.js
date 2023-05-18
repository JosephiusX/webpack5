const path = require('path')

module.exports = {
    context:path.resolve(__dirname,'src'),
    mode:'production', // treeShaking prod. mode
    devtool:'inline-source-map',
    entry:'./entry.js',
    optimization:{
      sideEffects:false
    },
    output:{
        clean:true,
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    watchOptions:{ignored:[path.resolve(__dirname,'node_modules')]},
    devServer:{
        static:{
            directory:path.join(__dirname,'public'),
        }
    }
}