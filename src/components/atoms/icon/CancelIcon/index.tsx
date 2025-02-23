import type { DispatchWithoutAction, FC } from "react";
import { RotateCw } from "lucide-react";
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
				<RotateCw className={style.icon} />
			</i>
			<Spacer horizontal size={4} />
			<div>Cancel</div>
			<button onClick={handleCancel} type="button" />
		</label>
	</IncludeIconButton>
);
