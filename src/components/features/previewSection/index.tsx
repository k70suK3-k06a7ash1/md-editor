import style from "./style.module.css";
import type { ContentType } from "~/types";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

type PreviewSectionProps = {
	contents: ContentType[];
};
export const PreviewSection = ({
	contents,
}: PreviewSectionProps): JSX.Element => (
	<>
		{contents?.length > 0 && (
			<div className={`markdown-body ${style.previewContent}`}>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{contents.map(({ content }) => content).join("\n")}
				</ReactMarkdown>
			</div>
		)}
	</>
);
