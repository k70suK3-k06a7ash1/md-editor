import { type Dispatch, useReducer, type DragEvent } from "react";

import { Card } from "~/components/atoms/card";
import style from "./style.module.css";
import { DraggableIcon } from "~/components/atoms/icon/DraggableIcon";
import { Spacer } from "~/components/atoms/Spacer";
import { DeleteIcon } from "~/components/atoms/icon/DeleteIcon";
import { EditMode } from "~/components/features/card/mode/edit";
import { DisplayMode } from "~/components/features/card/mode/display";
import type { ContentType } from "~/types";
type Props = {
	content: ContentType;
	updateContents: Dispatch<ContentType>;
	deleteContents: Dispatch<ContentType>;
	dragOver: Dispatch<DragEvent>;
	dragStart: Dispatch<DragEvent>;
	handleDrop: Dispatch<DragEvent>;
};

export const CardSection = ({
	content,
	updateContents,
	deleteContents,
	handleDrop,
	dragStart,
	dragOver,
}: Props) => {
	const [isEdit, toggleIsEdit] = useReducer((state) => {
		return !state;
	}, false);
	const handleDelete = () => {
		content.content.length === 0
			? updateContents({ id: content.id, content: "", level: content.level })
			: deleteContents(content);
	};

	return (
		<>
			{isEdit || content.content === "# " ? (
				<div className={style.editCardSection}>
					{/* substitute DraggableIcon */}
					<DeleteIcon handleDelete={handleDelete} />
					<Spacer horizontal size={12} />
					<Card>
						<EditMode
							updateContents={updateContents}
							toggleIsEdit={toggleIsEdit}
							content={content}
						/>
					</Card>
				</div>
			) : (
				<div
					primary-key={content.id}
					key={content.id}
					draggable={true}
					onDrop={handleDrop}
					onDragStart={dragStart}
					onDragOver={dragOver}
				>
					<div className={style.cardSection}>
						<DraggableIcon />
						<Spacer horizontal size={12} />
						<Card>
							<DisplayMode
								toggleIsEdit={toggleIsEdit}
								contentMarkdown={content.content}
							/>
						</Card>
					</div>
				</div>
			)}
		</>
	);
};
