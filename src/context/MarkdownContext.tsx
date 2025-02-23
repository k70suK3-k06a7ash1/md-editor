import {
	createContext,
	useState,
	useContext,
	type Dispatch,
	type SetStateAction,
	type PropsWithChildren,
} from "react";
import type { ContentType, SeparateLevelType } from "../types/index.ts";

interface MarkdownContextProps {
	markdown: ContentType[];
	setMarkdown: Dispatch<SetStateAction<ContentType[]>>;
	separateLevel: SeparateLevelType;
	setSeparateLevel: Dispatch<SetStateAction<SeparateLevelType>>;
}

const MarkdownContext = createContext<MarkdownContextProps | undefined>(
	undefined,
);

export const MarkdownProvider = ({ children }: PropsWithChildren) => {
	const [markdown, setMarkdown] = useState<ContentType[]>([]);
	const [separateLevel, setSeparateLevel] = useState<SeparateLevelType>("h1");

	return (
		<MarkdownContext.Provider
			value={{ markdown, setMarkdown, separateLevel, setSeparateLevel }}
		>
			{children}
		</MarkdownContext.Provider>
	);
};

export const useMarkdownContext = () => {
	const context = useContext(MarkdownContext);
	if (!context) {
		throw new Error(
			"useMarkdownContext must be used within a MarkdownProvider",
		);
	}
	return context;
};
