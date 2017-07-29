fis.hook('commonjs')
// fis.match('**.less', {
// 	parser:'less',
// 	rExt:'.css'
// })
// fis.match('**.jsx', {
// 	parser:'babel2',
// 	rExt:'.js'
// })
// .match('modules/**.jsx', {
// 	parser: 'babel2',
// 	rExt:'.js',
// 	iMod:true,
// 	packTo:'js/modules.js'
// })
// .match('lib/**.js', {
// 	packTo: 'js/lib.js'
// })
// .match('**.less', {
// 	parser:'less',
// 	rExt:'.css',
// 	packTo:'css/app.css'
// })
// .match('::package', {
// 	postpackager:'loader'
// })
// .match('**.{less,css}', {
// 	optimizer:'clean-css',
// 	useHash:true
// })
// .match('**.{jsx,js}', {
// 	optimizer: 'uglify-js',
// 	useHash: true
// })
fis.hook('commonjs')
// 打包
.match('modules/**.jsx', {
	parser: 'babel2',
	rExt: '.js',
	isMod: true,
	packTo: 'js/modules.js'
})
.match('lib/**.js', {
	packTo: 'js/lib.js'
})
.match('**.less', {
	parser: 'less',
	rExt: '.css',
	packTo: 'css/app.css'
})
.match('::package', {
	postpackager: 'loader'
})
.match('**.{less,css}', {
	optimizer: 'clean-css',
	useHash: true
})
.match('**.{jsx,js}', {
	optimizer: 'uglify-js',
	useHash: true
})