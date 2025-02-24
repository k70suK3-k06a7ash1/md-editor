import type { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => (
	<div className="px-6 overflow-hidden">{children}</div>
);
