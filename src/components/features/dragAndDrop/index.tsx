import { CardSection } from "../card/index";

import style from "./style.module.css";
import { useUpdateContent } from "~/hooks/useUpdateContents";
import { useDeleteContent } from "~/hooks/useDeleteContents";
import { useDragAndDrop } from "~/hooks/useDragAndDrop";
import { useMarkdownContext } from "~/context/MarkdownContext";

export const useDragComponents = () => {
	const { markdown } = useMarkdownContext();
	const { dragOver, dragStart, handleDrop } = useDragAndDrop();
	const { updateContents } = useUpdateContent();
	const { deleteContents } = useDeleteContent();

	const DragAndDropArea = () => (
		<div className={style.ContentAreaContainer}>
			{markdown?.map((contentObject) => {
				return (
					<CardSection
						key={contentObject.id}
						content={contentObject}
						updateContents={updateContents}
						deleteContents={deleteContents}
						dragOver={dragOver}
						dragStart={dragStart}
						handleDrop={handleDrop}
					/>
				);
			})}
		</div>
	);

	return { DragAndDropArea };
};
