import { PlusCircle } from "lucide-react";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { useAddSection } from "@/hooks/useAddSection";
import { Button } from "@/components/ui/button";

export const BottomAddSection = () => {
	const { handleAddSection } = useAddSection();
	return (
		<div className="fixed bottom-0 left-0 w-full flex items-center justify-start bg-gray-100 rounded-md p-4">
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
						<Button onClick={handleAddSection} type="button" />
					</label>
				</TabItem>
			</div>
		</div>
	);
};
