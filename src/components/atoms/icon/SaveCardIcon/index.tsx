import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { DispatchWithoutAction } from "react";
import { IconContainer } from "../../iconContainer";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
type SaveCardIconProps = {
	updateContents: DispatchWithoutAction;
	toggleIsEdit: DispatchWithoutAction;
};
export const SaveCardIcon = ({
	updateContents,
	toggleIsEdit,
}: SaveCardIconProps): JSX.Element => (
	<IconContainer>
		{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
		<i
			onClick={() => {
				updateContents();
				toggleIsEdit();
			}}
		>
			<FontAwesomeIcon className={style.saveCardIcon} icon={faFloppyDisk} />
			<Spacer horizontal size={8} />
			Save
		</i>
	</IconContainer>
);
