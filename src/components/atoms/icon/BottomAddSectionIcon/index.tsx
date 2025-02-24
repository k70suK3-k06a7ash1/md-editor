import { PlusCircle } from "lucide-react";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { useAddSection } from "~/hooks/useAddSection";

export const BottomAddSection = () => {
	const { handleAddSection } = useAddSection();
	return (
		<div className="flex items-center justify-start">
			<div>
				<Spacer horizontal size={30} />
			</div>
			<div className="w-full">
				<TabItem>
					{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
					<label className="cursor-pointer flex h-full items-center justify-center w-full box-border">
						<i>
							<PlusCircle className="text-xl" />
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
