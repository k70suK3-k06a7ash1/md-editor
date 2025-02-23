import type { DispatchWithoutAction, FC } from "react";
import { faArrowsTurnRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { IncludeIconButton } from "~/styles/IncludeIconButton";
type Props = {
	handleCancel: DispatchWithoutAction;
};
export const CancelIcon: FC<Props> = ({ handleCancel }) => (
	<IncludeIconButton>
		{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
		<label className={style.container}>
			<i>
				<FontAwesomeIcon className={style.icon} icon={faArrowsTurnRight} />
			</i>
			<Spacer horizontal size={4} />
			<div>Cancel</div>
			<button onClick={handleCancel} type="button" />
		</label>
	</IncludeIconButton>
);
