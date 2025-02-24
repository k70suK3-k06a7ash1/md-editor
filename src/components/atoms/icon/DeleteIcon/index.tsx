import type { DispatchWithoutAction } from "react";
import { XCircle } from "lucide-react";
import { Spacer } from "../../Spacer";

type DeleteIconProps = {
	handleDelete: DispatchWithoutAction;
};
export const DeleteIcon = ({ handleDelete }: DeleteIconProps) => (
	// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
	<label className="cursor-pointer h-full items-center">
		{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
		<i
			onClick={() => {
				handleDelete();
			}}
		>
			<XCircle className="text-xl text-[#f46565] invert" />
		</i>
		<Spacer horizontal size={4} />
	</label>
);
