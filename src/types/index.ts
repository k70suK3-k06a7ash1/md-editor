import type { ReactNode } from "react";
export type { LanguageKey } from "./figurative/LanguageType";
export type { PositionType } from "./figurative/PositionType";
export type { CONTENT_ACTION } from "./reducer/CONTENT_ACTION";

export type Composition = { children?: ReactNode };
export type SeparateLevelType = "h1" | "h2" | "h3";

export type ContentType = {
	id: string;
	content: string;
	level: SeparateLevelType;
};
