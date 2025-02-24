import { PlusCircle } from "lucide-react";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { useAddSection } from "@/hooks/useAddSection";
import { Button } from "@/components/ui/button";

export const BottomAddSection = () => {
	const { handleAddSection } = useAddSection();
	return (
		<div>
			<div>
				<Spacer horizontal size={30} />
			</div>
			<div className="w-full">
				<TabItem>
					<PlusCircle className="text-xl" />

					<div>Add Section</div>
					<Button onClick={handleAddSection} />
				</TabItem>
			</div>
		</div>
	);
};
