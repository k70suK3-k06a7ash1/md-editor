import type { DispatchWithoutAction } from "react";
import { FileUp } from "lucide-react";
import { Spacer } from "../../Spacer";
import { IncludeIconButton } from "@/styles/IncludeIconButton";
type Props = {
	handleApply: DispatchWithoutAction;
};
export const ApplyTemplateIcon = ({ handleApply }: Props) => (
	<IncludeIconButton>
		{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
		<label className="cursor-pointer flex h-full items-center">
			<i>
				<FileUp className="text-xl" />
			</i>
			<Spacer horizontal size={4} />
			<div>Apply the template</div>
			<button onClick={handleApply} type="button" className="hidden" />
		</label>
	</IncludeIconButton>
);
