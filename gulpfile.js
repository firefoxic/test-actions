import { readFile, writeFile } from "node:fs/promises"

export default async function () {
	// console.log(process.env.CI ? `::set-env name=HELLO::World` : `It's not a CI environment`)
	const envFilePath = process.env.GITHUB_ENV
	const envFileContent = await readFile(process.env.GITHUB_ENV, { encoding: 'utf8' })
	await writeFile(envFilePath, `${envFileContent}\nHELLO=World`)
	// console.log(process.env.CI ? process.env.GITHUB_ENV : ``)
}
