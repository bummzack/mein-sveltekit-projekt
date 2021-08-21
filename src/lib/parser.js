import {existsSync, readFileSync} from "fs";
import {resolve} from "path";
import matter from "gray-matter";

export function parseFrontMatter(slug) {
	const filePath = resolve(`./src/pages/${slug}.md`);
	if (existsSync(filePath)) {
		const rawContent = readFileSync(filePath, 'utf8');
		return matter(rawContent);
	}

	return null;
}
