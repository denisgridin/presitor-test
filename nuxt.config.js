import { resolve } from 'path'
export default {
	server: {
		port: 8000
	},
	vue: {
		config: {
			productionTip: false,
			devtools: true
		}
	},
	modules: [
		'@nuxtjs/axios',
	],
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/dotenv',
		'@nuxtjs/axios',
		'nuxt-typed-vuex',
	],
	typescript: {
		typeCheck: {
			eslint: {
				files: './**/*.{ts,js,vue}'
			}
		}
	},
	srcDir: resolve(__dirname, './src'),
	dir: {
		app: './',
		assets: 'assets',
		layouts: 'layouts',
		pages: 'pages',
		store: 'store'
	},
	alias: {

	},
	components: true,
	css: [
		'~assets/style/variables',
		'~assets/style/main'
	]
}