import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => (
	<div className="rounded-lg border border-gray-300 bg-white w-full overflow-hidden shadow-sm">
		{children}
	</div>
);
