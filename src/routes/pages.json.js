import {readdirSync} from "fs";
import {basename, resolve} from "path";
import {parseFrontMatter} from "$lib/parser";

export async function get() {
	const files = readdirSync(resolve('./src/pages'));

	const list = files.reduce((accum, fileName) => {
		if (fileName.endsWith('.md')) {
			const slug = basename(fileName, '.md');
			const frontmatter = parseFrontMatter(slug);
			accum.push({
				slug,
				title: frontmatter?.title || slug
			})
		}
		return accum;
	}, []);

	return {
		status: 200,
		body: list
	}
}
