import type { Dispatch, ChangeEvent } from "react";
import { FileInput } from "lucide-react";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
type Props = {
	handleClick: Dispatch<ChangeEvent<HTMLInputElement>>;
};
export const FileImport = ({ handleClick }: Props) => (
	<TabItem>
		<label className={style.container}>
			<i>
				<FileInput className={style.icon} />
			</i>
			<Spacer horizontal size={4} />
			<div>Import</div>
			<input type="file" accept=".md" onChange={handleClick} />
		</label>
	</TabItem>
);
