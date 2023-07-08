export default function (done) {
	// process.env.GITHUB_ENV.HELLO = `World`
	console.info(process.env.NODE_ENV)
	if (process.env.CI) {
		console.info(process.env.CI)
		console.info(process.env.GITHUB_ENV)
	}
	done()
}
