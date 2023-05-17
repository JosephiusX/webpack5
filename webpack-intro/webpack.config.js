const path = require('path')

module.exports  = {
  // context
  mode:'development',
  devtool: 'inline-source-map',
  // entry: './src/entry/js',
  entry:{
    main:'./src/entry.js'
  },
  output:{
    iife:true,
    clean:true,  // automatically emptys dist before bundleing. 
    filename:'[name].js',
  }
}