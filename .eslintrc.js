module.exports = {
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'eslint:recommended'
	],
	rules: {
		'eol-last': 0,
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
		indent: [2, 'tab'],
		'no-tabs': 0
	}
}
