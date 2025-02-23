import type { DispatchWithoutAction } from "react";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
type Props = {
	handleAddSection: DispatchWithoutAction;
};
export const AddSection = ({ handleAddSection }: Props) => (
	<TabItem>
		<label className={style.container}>
			<i>
				<FontAwesomeIcon className={style.icon} icon={faSquarePlus} />
			</i>
			<Spacer horizontal size={4} />
			<div>Add Section</div>
			<button onClick={handleAddSection} type="button" />
		</label>
	</TabItem>
);
