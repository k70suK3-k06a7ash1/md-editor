import type { Composition } from "@/types";
export const SubContent = ({ children }: Composition): JSX.Element => (
	<div className="px-6 bg-gray-100 rounded-md p-4">{children}</div>
);
