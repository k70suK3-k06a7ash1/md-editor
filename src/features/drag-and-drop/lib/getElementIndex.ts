import type { ContentType } from "~/types";

export const getElementIndex = (
	contentsList: ContentType[],
	elementPrimaryKey: string | null,
) => {
	const elementIndex: number = contentsList.findIndex(
		(contentObject: ContentType) => {
			return contentObject.id === String(elementPrimaryKey);
		},
	);

	return elementIndex;
};
