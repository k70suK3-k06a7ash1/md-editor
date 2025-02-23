import { useMarkdownContext } from "~/context/MarkdownContext";
import type { ContentType } from "~/types";

export const useUpdateContent = () => {
	const { markdown, setMarkdown: set } = useMarkdownContext();
	const updateContents = (content: ContentType) => {
		const cloneContent = [...markdown];
		const index = cloneContent.findIndex((item) => item.id === content.id);
		if (index !== -1) {
			cloneContent[index] = content;
			set(cloneContent);
		}
	};
	return { updateContents };
};
