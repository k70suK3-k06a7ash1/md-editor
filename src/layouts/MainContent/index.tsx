import type { PropsWithChildren } from "react";

export const MainContent = ({ children }: PropsWithChildren) => (
	<div className="grid grid-cols-2 gap-4 w-full">{children}</div>
);
