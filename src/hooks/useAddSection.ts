import { useViewControl } from "~/hooks/useViewControl";
import { useSplitByTag } from "~/hooks/useSplitByTag";
import { useMarkdownContext } from "~/context/MarkdownContext";

export const useAddSection = () => {
	const { splitByTag } = useSplitByTag();
	const { setMarkdown: set } = useMarkdownContext();
	const { scrollToBottom } = useViewControl();
	const handleAddSection = () => {
		set((currentValue) => {
			const contents = currentValue.map(({ content }) => content).join("\n");
			const origin = splitByTag(contents);
			const addOrigin = [...origin, "# "];
			return addOrigin?.map((content, index) => ({
				id: String(index),
				content: content,
				level: "h1",
			}));
		});
		scrollToBottom();
	};

	return { handleAddSection };
};
