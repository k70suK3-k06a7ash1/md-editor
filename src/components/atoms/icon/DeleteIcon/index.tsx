import type { DispatchWithoutAction } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
			<FontAwesomeIcon className={style.icon} icon={faCircleXmark} />
		</i>
		<Spacer horizontal size={4} />
	</label>
);
