import { readFile, writeFile } from "node:fs/promises"

/**
 * Set CI environment variable for the GitHub environment file.
 * @param {string} varName - The name of the environment variable.
 * @param {string} varValue - The value of the environment variable.
 */
async function setEnvVar (varName, varValue) {
	if (process.env.CI) {
		const envFilePath = process.env.GITHUB_ENV
		const envFileContent = await readFile(process.env.GITHUB_ENV, { encoding: 'utf8' })
		await writeFile(envFilePath, `${envFileContent}\n${varName}=${varValue}`)
	} else {
		console.log(`It's not a CI environment`)
	}
}

export default async function () {
	await setEnvVar(`HELLO`, `World`)
}
