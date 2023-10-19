import { appendFileSync } from "node:fs"

/**
 * Get the path to the project root when deploying to GitHub Pages.
 * Your action should set the `REPO_NAME` environment variable at the step you need (most likely when building the project), for example like this:
 * - name: Build project
 *   run: pnpm build
 *   env:
 *     REPO_NAME: ${{ github.event.repository.name }}
 * @returns {string} The path to the project directory from the domain root if working in a GitHub CI environment. If not, returns `/`.
 */
export function getProjectRoot () {
	if (!process.env.CI) return `/`

	return `/${process.env.REPO_NAME}/`
}

/**
 * Set environment variable for the GitHub CI (eg. gh-pages).
 * @param {string} varName - The name of the environment variable.
 * @param {string} varValue - The value of the environment variable.
 */
export function setGitHubEnvVar (varName, varValue) {
	if (!process.env.CI) return

	appendFileSync(process.env.GITHUB_ENV, `\n${varName}=${varValue}`)
}
