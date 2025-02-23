import { useSplitByTag } from "~/hooks/useSplitByTag";
import type { ContentType, SeparateLevelType } from "~/types";
import { useMarkdownContext } from "~/context/MarkdownContext";

export const useDeleteContent = () => {
	const { splitByTag } = useSplitByTag();
	const { markdown, setMarkdown: set } = useMarkdownContext();

	const deleteContents = (content: ContentType) => {
		const cloneContent = [...markdown];
		cloneContent[Number(content.id)] = content;
		const markdwonAsString = cloneContent
			.filter(({ id }) => id !== content.id)
			.map(({ content }) => content)
			.join("\n");

		const origin = splitByTag(markdwonAsString ?? "");

		const makedContents = origin?.map((content, index) => {
			return {
				id: String(index),
				content: content,
				level: "h1" as SeparateLevelType,
			};
		}, []);
		set(makedContents);
	};

	return { deleteContents };
};
