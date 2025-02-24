import { PlusCircle } from "lucide-react";
import { Spacer } from "../../Spacer";
import { useAddSection } from "@/hooks/useAddSection";
import { Button } from "@/components/ui/button";

export const BottomAddSection = () => {
	const { handleAddSection } = useAddSection();
	return (
		<div>
			<div>
				<Spacer horizontal size={30} />
			</div>
			<Button onClick={handleAddSection}>
				<PlusCircle className="text-xl" />

				<div>Add Section</div>
			</Button>
		</div>
	);
};
