import { Composition } from "~/types";
export const IncludeIconButton = ({ children }: Composition): JSX.Element => (
	<div className="border-3 border-[#424040] border-solid rounded-md py-1 px-2 hover:invert">
		{children}
	</div>
);
