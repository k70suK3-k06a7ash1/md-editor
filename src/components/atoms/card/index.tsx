import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => (
	<div className="rounded-lg border-3 border-gray-800 bg-gray-200 w-full overflow-hidden">
		{children}
	</div>
);
