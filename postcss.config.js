export default function () {
	return {
		plugins: {
			"postcss-url": {
				filter: `**/*.svg`,
				url: `inline`,
			},
			"postcss-lightningcss": {},
		},
	}
}
