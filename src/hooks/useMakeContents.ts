import { useSplitByTag } from "./useSplitByTag";
import type { SeparateLevelType } from "@/types";
export const useMakeContents = () => {
	const { splitByTag } = useSplitByTag();

	const makeContents = (contents?: string) => {
		const origin = splitByTag(contents ?? "");

		const madeContents = origin?.map((content, index) => {
			return {
				id: String(index),
				content: content,
				level: "h1" as SeparateLevelType,
			};
		}, []);

		return madeContents;
	};
	return { makeContents };
};
