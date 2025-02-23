import type { DispatchWithoutAction } from "react";
import { PlusSquare } from "lucide-react";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
type Props = {
	handleAddSection: DispatchWithoutAction;
};
export const AddSection = ({ handleAddSection }: Props) => (
	<TabItem>
		{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
		<label className={style.container}>
			<i>
				<PlusSquare className={style.icon} />
			</i>
			<Spacer horizontal size={4} />
			<div>Add Section</div>
			<button onClick={handleAddSection} type="button" />
		</label>
	</TabItem>
);
