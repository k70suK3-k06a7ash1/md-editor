import React from "react";
import { GripVertical } from "lucide-react";
import { Spacer } from "../../Spacer";

export const DraggableIcon = () => (
	// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
	<label className="cursor-inherit flex h-full items-center">
		<i>
			<GripVertical className="text-xl" />
		</i>
		<Spacer horizontal size={4} />
	</label>
);
