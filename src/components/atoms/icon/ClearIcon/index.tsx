import { faBroom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { useMarkdownContext } from "~/context/MarkdownContext";

export const ClearIcon = () => {
	const { setMarkdown } = useMarkdownContext();

	return (
		<TabItem>
			{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
			<label className={style.container}>
				<i>
					<FontAwesomeIcon className={style.icon} icon={faBroom} />
				</i>
				<Spacer horizontal size={4} />
				<div>Clear</div>
				<button onClick={() => setMarkdown([])} type="button" />
			</label>
		</TabItem>
	);
};
