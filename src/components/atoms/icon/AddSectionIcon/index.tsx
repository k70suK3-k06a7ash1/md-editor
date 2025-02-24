import type { DispatchWithoutAction, JSX } from "react";
import { PlusSquare } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

type Props = {
	handleAddSection: DispatchWithoutAction;
};

export const AddSection = ({ handleAddSection }: Props): JSX.Element => (
	<Button onClick={handleAddSection}>
		<PlusSquare className="h-4 w-4 mr-2" />
		Add Section
	</Button>
);
