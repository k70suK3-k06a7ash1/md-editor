import type { DispatchWithoutAction } from "react";
import { FileUp } from "lucide-react";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { IncludeIconButton } from "~/styles/IncludeIconButton";
type Props = {
	handleApply: DispatchWithoutAction;
};
export const ApplyTemplateIcon = ({ handleApply }: Props) => (
	<IncludeIconButton>
		{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
		<label className={style.container}>
			<i>
				<FileUp className={style.icon} />
			</i>
			<Spacer horizontal size={4} />
			<div>Apply the template</div>
			<button onClick={handleApply} type="button" />
		</label>
	</IncludeIconButton>
);
