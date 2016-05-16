module.exports = {
	entry : './app/app.jsx',
	output : {
		path : __dirname,
		filename : './public/bundle.js'
	},
	resolve : {
		root : __dirname,
		alias : { //이렇게 cmd파일 불러 올수도 있을것같다. require.js path에 등록하는거랑 비슷한것같음
			Main : 'app/components/Main.jsx',
			Nav : 'app/components/Nav.jsx',
			Weather : 'app/components/Weather.jsx',
			WeatherForm : 'app/components/WeatherForm.jsx',
			WeatherMessage : 'app/components/WeatherMessage.jsx',
			About : 'app/components/About.jsx',
			Examples : 'app/components/Examples.jsx',
			openWeatherMap : 'app/api/openWeatherMap.jsx'
		},
		extensions : ['', '.js', '.jsx']
	},
	module : {
		loaders : [
			{
				loader : 'babel-loader',
				query : {
					presets: ['react', 'es2015', 'stage-0']
				},
				test : /\.jsx?$/,
				exclude : /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};