import type { Composition } from "~/types";
export const TabItem = ({ children }: Composition): JSX.Element => (
	<div className="border-3 border-[#424040] border-dotted rounded-md py-1 px-2">
		{children}
	</div>
);
