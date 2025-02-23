import { PlusCircle } from "lucide-react";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { useAddSection } from "~/hooks/useAddSection";

export const BottomAddSection = () => {
	const { handleAddSection } = useAddSection();
	return (
		<div className={style.bottomAddContentSection}>
			<div>
				<Spacer horizontal size={30} />
			</div>
			<div className={style.wrapper}>
				<TabItem>
					{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
					<label className={style.container}>
						<i>
							<PlusCircle className={style.icon} />
						</i>
						<Spacer horizontal size={4} />
						<div>Add Section</div>
						<button onClick={handleAddSection} type="button" />
					</label>
				</TabItem>
			</div>
		</div>
	);
};
