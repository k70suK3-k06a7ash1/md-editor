import { CardSection } from "@/features/markdown-editor/ui";

import { useUpdateContent } from "@/features/markdown-editor/model/useUpdateContents";
import { useDeleteContent } from "@/features/markdown-editor/model/useDeleteContent";
import { useDragAndDrop } from "@/features/drag-and-drop/model/useDragAndDrop";
import { useMarkdownContext } from "@/context/MarkdownContext";

export const useDragComponents = () => {
	const { markdown } = useMarkdownContext();
	const { dragOver, dragStart, handleDrop } = useDragAndDrop();
	const { updateContents } = useUpdateContent();
	const { deleteContents } = useDeleteContent();

	const DragAndDropArea = () => (
		<div className="flex flex-col gap-6">
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
