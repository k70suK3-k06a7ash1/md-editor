import type { SeparateLevelType } from "@/types";
import { useMarkdownContext } from "@/context/MarkdownContext";

export const useSeparateLevel = () => {
	const { separateLevel, setSeparateLevel: set } = useMarkdownContext();

	const onClickByLevel = (level: SeparateLevelType) => {
		set(level);
	};
	const onClickIncrement = () => {
		const pattern = /h(.)/;
		const level = separateLevel.match(pattern);
		const numberOfLevel = level?.[1];
		Number(numberOfLevel) < 3 &&
			set(`h${Number(numberOfLevel) + 1}` as SeparateLevelType);
	};
	const onClickDecrement = () => {
		const pattern = /h(.)/;
		const level = separateLevel.match(pattern);
		const numberOfLevel = level?.[1];
		Number(numberOfLevel) > 1 &&
			set(`h${Number(numberOfLevel) - 1}` as SeparateLevelType);
	};

	return { separateLevel, onClickByLevel, onClickIncrement, onClickDecrement };
};
