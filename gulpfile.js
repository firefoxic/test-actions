export default function () {
	console.info(process.env.NODE_ENV)
	if (process.env.CI) {
		console.info(process.env.CI)
		console.info(process.env.REPO_NAME)
	}
}
