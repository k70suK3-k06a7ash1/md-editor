import { useSplitByTag } from "~/hooks/useSplitByTag";
import type { ContentType } from "~/types";
import { useMarkdownContext } from "~/context/MarkdownContext";

export const useDeleteContent = () => {
	const { splitByTag } = useSplitByTag();
	const { markdown, setMarkdown: set } = useMarkdownContext();

	const deleteContents = (content: ContentType) => {
		const cloneContent = [...markdown];
		cloneContent[content.id] = content;
		const markdwonAsString = cloneContent
			.filter(({ id }) => id !== content.id)
			.map(({ content }) => content)
			.join("\n");

		const origin = splitByTag(markdwonAsString ?? "");

		const makedContents = origin?.map((content, index) => {
			return { id: index, content: content };
		}, []);
		set(makedContents);
	};

	return { deleteContents };
};
