import { patternH1, patternH2, patternH3 } from "@/libs/common/patterns";
import { useMarkdownContext } from "@/context/MarkdownContext";

export const useSwitchPatternBySeparateLevel = () => {
	const { separateLevel } = useMarkdownContext();

	const switchPatternBySeparateLevel = (contentString: string) => {
		switch (separateLevel) {
			case "h1":
				return contentString.match(patternH1);
			case "h2":
				return contentString.match(patternH1) || contentString.match(patternH2);
			case "h3":
				return (
					contentString.match(patternH1) ||
					contentString.match(patternH2) ||
					contentString.match(patternH3)
				);
			default:
				return contentString.match(patternH1);
		}
	};
	return { switchPatternBySeparateLevel };
};
