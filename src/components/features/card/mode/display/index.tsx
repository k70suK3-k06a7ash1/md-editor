import type { DispatchWithoutAction } from "react";
import ReactMarkdown from "react-markdown";
import { EditCardIcon } from "@/components/atoms/icon/EditCardIcon";
import remarkGfm from "remark-gfm";

type DisplayCardProps = {
	toggleIsEdit: DispatchWithoutAction;
	contentMarkdown: string;
};
export const DisplayMode = ({
	toggleIsEdit,
	contentMarkdown,
}: DisplayCardProps) => {
	return (
		<div className="p-0 px-4 pb-4 rounded-lg markdown-body filter invert">
			<div className="absolute top-2 right-4">
				<EditCardIcon toggleIsEdit={toggleIsEdit} />
			</div>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>
				{contentMarkdown}
			</ReactMarkdown>
		</div>
	);
};
