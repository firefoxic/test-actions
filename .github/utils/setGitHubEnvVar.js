import { appendFileSync } from "node:fs"
import { env } from "node:process"

/**
 * Set environment variable for the GitHub CI (eg. gh-pages).
 * @param {string} varName - The name of the environment variable.
 * @param {string} varValue - The value of the environment variable.
 */
export function setGitHubEnvVar (varName, varValue) {
	if (!env.CI) return

	appendFileSync(env.GITHUB_ENV, `\n${varName}=${varValue}`)
}
