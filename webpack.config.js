module.exports = {
	entry : './public/app.jsx',
	output : {
		path : __dirname,
		filename : './public/bundle.js'
	},
	resolve : {
		root : __dirname,
		alias : { //이렇게 cmd파일 불러 올수도 있을것같다. require.js path에 등록하는거랑 비슷한것같음
			Greeter : 'public/components/Greeter.jsx',
			GreeterMessage : 'public/components/GreeterMessage.jsx',
			GreeterForm : 'public/components/GreeterForm.jsx'
		},
		extensions : ['', '.js', '.jsx']
	},
	module : {
		loaders : [
			{
				loader : 'babel-loader',
				query : {
					presets: ['react', 'es2015']
				},
				test : /\.jsx?$/,
				exclude : /(node_modules|bower_components)/
			}
		]
	}
};