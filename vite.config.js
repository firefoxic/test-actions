import { appendFileSync } from "node:fs"

import { defineConfig } from "vite"
import browserslistToEsbuild from "browserslist-to-esbuild"

const PATH_TO_SOURCE = `./src`
const PATH_TO_DIST = `./dist`

setEnvVar(`PATH_TO_DIST`, PATH_TO_DIST)

export default defineConfig({
	base: process.env.CI ? `/${process.env.REPO_NAME}/` : `/`,
	root: PATH_TO_SOURCE,
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: `.${PATH_TO_DIST}`,
		emptyOutDir: true,
		target: browserslistToEsbuild(),
	},
})

/**
 * Set CI environment variable for the GitHub environment file.
 * @param {string} varName - The name of the environment variable.
 * @param {string} varValue - The value of the environment variable.
 */
function setEnvVar (varName, varValue) {
	if (!process.env.CI) return

	appendFileSync(process.env.GITHUB_ENV, `\n${varName}=${varValue}`)
}
