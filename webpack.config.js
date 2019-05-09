var path = require('path');

module.exports = {
devServer: {
	    contentBase: path.join(__dirname, './src'),
	    compress: true,
	    port: 8080
},
  entry: {
    game: './src/js/main.js'
},
output: {
    filename: 'game.js'
},
};