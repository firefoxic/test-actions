import { appendFile, link, readFile } from "node:fs/promises"

await link(`example.txt`, `example2.txt`)

async function addLineToFile (filename, line) {
	try {
		await appendFile(filename, `${line}\n`)
		console.log(`Строка успешно добавлена в файл!`)
	} catch (err) {
		console.error(`Произошла ошибка при записи в файл:`, err)
	}
}

addLineToFile(`example2.txt`, `New line!`)

let sourceFile = await readFile(`example.txt`, `utf-8`)
let resultFile = await readFile(`example2.txt`, `utf-8`)

console.log(`Исходный файл:\n\n`, sourceFile, `\n\n`)
console.log(`Результирующий файл:\n\n`, resultFile)
