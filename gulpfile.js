export default function (done) {
	// process.env.HELLO = `World`
	console.info(`Test`)
	if (process.env.CI) {
		console.info(process.env.GITHUB_ENV = `${process.env.GITHUB_ENV}\nHELLO=World`)
	}
	console.info(process.env.GITHUB_ENV)
	done()
}
