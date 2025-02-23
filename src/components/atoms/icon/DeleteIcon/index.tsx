import type { DispatchWithoutAction } from "react";
import { XCircle } from "lucide-react";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";

type DeleteIconProps = {
	handleDelete: DispatchWithoutAction;
};
export const DeleteIcon = ({ handleDelete }: DeleteIconProps) => (
	// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
	<label className={style.container}>
		{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
		<i
			onClick={() => {
				handleDelete();
			}}
		>
			<XCircle className={style.icon} />
		</i>
		<Spacer horizontal size={4} />
	</label>
);
