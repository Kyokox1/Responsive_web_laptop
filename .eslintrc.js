module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"plugin:react/recommended",
		"standard",
		"eslint-config-prettier"
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"react/prop-types": "off"
	}
};
