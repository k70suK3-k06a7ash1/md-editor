import {
	type Dispatch,
	type DispatchWithoutAction,
	useState,
	useEffect,
	useRef,
	useCallback,
} from "react";
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
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [errorMessage, setErrorMessage] = useState<string>("");

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "inherit";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, []);

	const handleUpdateContents = useCallback(() => {
		if (isIncludeTag(editContent.split("\n")[0])) {
			updateContents({
				id: content.id,
				content: editContent,
				level: content.level,
			});
			setErrorMessage("");
		} else {
			setErrorMessage("The first line must have one to two # symbols");
		}
	}, [editContent, isIncludeTag, updateContents, content.id, content.level]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if ((event.ctrlKey || event.metaKey) && event.key === "s") {
				event.preventDefault();
				handleUpdateContents();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleUpdateContents]);

	return (
		<div className="relative w-full">
			<div className="absolute top-2 right-4">
				<SaveCardIcon
					updateContents={handleUpdateContents}
					toggleIsEdit={toggleIsEdit}
				/>
			</div>
			<textarea
				ref={textareaRef}
				className="w-full h-full text-base  rounded-md p-2  resize-none "
				value={editContent}
				onChange={(event) => {
					setEditContent(event.target.value);
				}}
				style={{ overflow: "hidden" }}
			/>
			{errorMessage && <div className="text-red-500">{errorMessage}</div>}
		</div>
	);
};
