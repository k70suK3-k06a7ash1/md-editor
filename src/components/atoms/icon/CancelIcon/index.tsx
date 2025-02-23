import type { DispatchWithoutAction, FC } from "react";
import { RotateCw } from "lucide-react";
import { Button } from "~/components/ui/button";

type Props = {
	handleCancel: DispatchWithoutAction;
};

export const CancelIcon: FC<Props> = ({ handleCancel }) => (
	<Button variant="ghost" size="icon" onClick={handleCancel}>
		<RotateCw className="h-4 w-4" />
		Cancel
	</Button>
);
