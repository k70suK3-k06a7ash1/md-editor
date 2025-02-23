import { useMarkdownContext } from "~/context/MarkdownContext";
import type { ContentType } from "~/types";

export const useUpdateContent = () => {
	const { markdown, setMarkdown: set } = useMarkdownContext();
	const updateContents = (content: ContentType) => {
		const cloneContent = [...markdown];
		cloneContent[content.id] = content;
		set(cloneContent);
	};
	return { updateContents };
};
