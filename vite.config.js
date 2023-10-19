import { defineConfig } from "vite"
import browserslistToEsbuild from "browserslist-to-esbuild"

import { getProjectRoot, setGitHubEnvVar } from "./.github/gh-utils.js"

const PATH_TO_SOURCE = `./src`
const PATH_TO_DIST = `./dist`

setGitHubEnvVar(`PATH_TO_DIST`, PATH_TO_DIST)

export default defineConfig({
	base: getProjectRoot(),
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
