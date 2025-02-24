import type { PropsWithChildren } from "react";

export const MainContent = ({ children }: PropsWithChildren) => (
	<div className="flex">{children}</div>
);
