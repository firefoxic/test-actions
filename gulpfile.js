export default async function () {
	console.log(process.env.CI ? `::set-env name=HELLO::World` : `It's not a CI environment`)
	console.log(process.env.CI ? process.env.ENV_FILE_PATH : ``)
}
