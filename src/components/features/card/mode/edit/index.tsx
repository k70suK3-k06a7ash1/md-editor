import { type Dispatch, type DispatchWithoutAction, useState } from "react";
import type { ContentType } from "@/types";
import { SaveCardIcon } from "@/components/atoms/icon/SaveCardIcon";
import { useIsIncludeTag } from "@/hooks/useIsIncludeTag";

type EditCardProps = {
	content: ContentType;
	toggleIsEdit: DispatchWithoutAction;
	updateContents: Dispatch<ContentType>;
};

export const EditMode = ({
	toggleIsEdit,
	updateContents,
	content,
}: EditCardProps) => {
	const { isIncludeTag } = useIsIncludeTag();
	const [editContent, setEditContent] = useState<string>(content.content);

	const handleUpdateContents = () => {
		isIncludeTag(editContent.split("\n")[0])
			? updateContents({
					id: content.id,
					content: editContent,
					level: content.level,
				})
			: window.alert("The first line must have one to two # symbols");
	};
	return (
		<div className="relative">
			<div className="absolute top-2 right-4">
				<SaveCardIcon
					updateContents={handleUpdateContents}
					toggleIsEdit={toggleIsEdit}
				/>
			</div>
			<textarea
				className="w-full h-[20vh] text-base border-2 border-gray-200 rounded-md p-2 box-border bg-gray-200"
				value={editContent}
				onChange={(event) => {
					setEditContent(event.target.value);
				}}
			/>
		</div>
	);
};
