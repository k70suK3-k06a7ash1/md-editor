import { FileText } from "lucide-react";
import { Spacer } from "../../Spacer";
import type { LanguageKey, SeparateLevelType } from "@/types";
import { languageAndReadmeMap } from "@/constants/languageAndReadmeMap";
import { useSplitByTag } from "@/hooks/useSplitByTag";
import { useMarkdownContext } from "@/context/MarkdownContext";
import { Button } from "@/components/ui/button";

export const TemplateSection = () => {
	const { splitByTag } = useSplitByTag();
	const { setMarkdown: set } = useMarkdownContext();

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
			{/* <Modal>
				<SetTemplateModal handleClose={close} handleApply={handleSetTemplate} />
			</Modal> */}

			{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
			<Button onClick={() => handleSetTemplate("english")}>
				<i>
					<FileText className="text-xl" />
				</i>
				<Spacer horizontal size={4} />
				<div>Use Template</div>
			</Button>
		</>
	);
};
