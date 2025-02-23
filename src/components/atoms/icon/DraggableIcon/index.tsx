import React from "react";
import { GripVertical } from "lucide-react";
import style from "./style.module.css";
import { Spacer } from "../../Spacer";

export const DraggableIcon = () => (
	// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
	<label className={style.container}>
		<i>
			<GripVertical className={style.icon} />
		</i>
		<Spacer horizontal size={4} />
	</label>
);
