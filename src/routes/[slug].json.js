import marked from "marked";
import {parseFrontMatter} from "$lib/parser";

export async function get({ params }) {
	const { slug } = params;

	const frontmatter = parseFrontMatter(slug);
	if (frontmatter) {
		return {
			body: {
				data: frontmatter.data,
				content: marked(frontmatter.content)
			}
		}
	}

	return {
		status: 404,
		body: "Not found"
	}
}
