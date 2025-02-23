import { type DragEvent, useRef } from "react";
import { getElementIndex } from "~/libs/feature/dragAndDrop/getElementIndex";
import type { PositionType } from "~/types";
import {
	handleDragStart,
	handleDragOver,
} from "~/libs/feature/dragAndDrop/handleDrag";
import { reSortArrayElements } from "~/libs/feature/dragAndDrop/reSortArrayElements";
import { useMarkdownContext } from "~/context/MarkdownContext";

export const useDragAndDrop = () => {
	const { markdown, setMarkdown: set } = useMarkdownContext();

	const draggingObjectState = useRef<PositionType>({
		point: null,
	});
	const beDraggedObjectState = useRef<PositionType>({
		point: null,
	});

	const dragOver = (event: DragEvent) => {
		handleDragOver(event, beDraggedObjectState);
	};

	const dragStart = (event: DragEvent) => {
		handleDragStart(event, draggingObjectState);
	};

	const handleDrop = (event: DragEvent) => {
		const hoveredElementPrimaryKey: string | null =
			event.currentTarget.getAttribute("primary-key");
		const draggingElementPrimaryKey: string | null =
			draggingObjectState.current.point;
		const hoveredElementIndex: number = getElementIndex(
			markdown,
			hoveredElementPrimaryKey,
		);
		const draggingElementIndex: number = getElementIndex(
			markdown,
			draggingElementPrimaryKey,
		);
		const replaceList = reSortArrayElements(
			markdown,
			hoveredElementIndex,
			draggingElementIndex,
		);

		set(replaceList);
	};

	return { dragOver, dragStart, handleDrop };
};
