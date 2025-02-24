import { FileText } from "lucide-react";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import type { LanguageKey, SeparateLevelType } from "~/types";
import { useModal } from "react-hooks-use-modal";
import { SetTemplateModal } from "~/components/features/setTemplateModal";
import { languageAndReadmeMap } from "~/constants/languageAndReadmeMap";
import { useSplitByTag } from "~/hooks/useSplitByTag";
import { useMarkdownContext } from "~/context/MarkdownContext";

export const TemplateSection = () => {
	const { splitByTag } = useSplitByTag();
	const { setMarkdown: set } = useMarkdownContext();

	const [Modal, open, close] = useModal("root", {
		preventScroll: true,
		focusTrapOptions: {
			clickOutsideDeactivates: false,
		},
	});

	const handleSetTemplate = (languageKey: LanguageKey) => {
		if (languageKey === undefined) {
			throw new Error("language key is undefined");
		}
		const defaultReadme = languageAndReadmeMap[languageKey];
		const origin = splitByTag(defaultReadme);
		const makedContents = origin?.map((content, index) => {
			return {
				id: String(index),
				content: content,
				level: "h1" as SeparateLevelType,
			};
		});

		set(makedContents);
	};

	return (
		<>
			<Modal>
				<SetTemplateModal handleClose={close} handleApply={handleSetTemplate} />
			</Modal>

			<TabItem>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label className="cursor-pointer flex h-full items-center">
					<i>
						<FileText className="text-xl" />
					</i>
					<Spacer horizontal size={4} />
					<div>Use Template</div>
					<button onClick={open} type="button" />
				</label>
			</TabItem>
		</>
	);
};
