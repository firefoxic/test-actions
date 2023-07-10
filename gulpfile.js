import { readFileSync, writeFileSync, rmSync } from "node:fs"
import gulp from "gulp"

const { src, dest, series } = gulp
const DIST = `./dist/`

export function createDouble () {
	return src(`./src/*.html`)
		.pipe(dest(DIST))
}

export async function removeDist () {
	rmSync(DIST, { force: true, recursive: true })
}

/**
 * Set CI environment variable for the GitHub environment file.
 * @param {string} varName - The name of the environment variable.
 * @param {string} varValue - The value of the environment variable.
 */
function setEnvVar (varName, varValue) {
	if (process.env.CI) {
		const envFilePath = process.env.GITHUB_ENV
		const envFileContent = readFileSync(process.env.GITHUB_ENV, { encoding: 'utf8' })
		writeFileSync(envFilePath, `${envFileContent}\n${varName}=${varValue}`)
	} else {
		console.log(`It's not a CI environment`)
	}
}

export default function (done) {
	setEnvVar(`DIST`, DIST)
	series(
		removeDist,
		createDouble,
	)(done)
}
