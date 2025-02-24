import type { ContentType } from "@/types";
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
			<div
				className={`markdown-body py-4 px-8 bg-gradient-145 from-[#4f4e4e] to-[#323232] shadow-md box-border rounded-md`}
			>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{contents.map(({ content }) => content).join("\n")}
				</ReactMarkdown>
			</div>
		)}
	</>
);
