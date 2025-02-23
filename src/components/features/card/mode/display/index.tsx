import type { DispatchWithoutAction } from "react";
import ReactMarkdown from "react-markdown";
import { EditCardIcon } from "~/components/atoms/icon/EditCardIcon";
import remarkGfm from "remark-gfm";
import style from "./style.module.css";

type DisplayCardProps = {
	toggleIsEdit: DispatchWithoutAction;
	contentMarkdown: string;
};
export const DisplayMode = ({
	toggleIsEdit,
	contentMarkdown,
}: DisplayCardProps) => {
	return (
		<div className={`${style.wrapper} markdown-body ${style.filterInvert}`}>
			<div className={style.iconPosition}>
				<EditCardIcon toggleIsEdit={toggleIsEdit} />
			</div>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>
				{contentMarkdown}
			</ReactMarkdown>
		</div>
	);
};
