import type { DispatchWithoutAction } from "react";
import { Download } from "lucide-react";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
import { Button } from "@/components/ui/button";
type Props = {
	handleMarkdownDownload: DispatchWithoutAction;
};
export const FileExport = ({ handleMarkdownDownload }: Props) => (
	<TabItem>
		{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
		<label className="cursor-pointer flex h-full items-center">
			<i>
				<Download className="cursor-pointer text-xl" />
			</i>
			<Spacer horizontal size={4} />
			<div>Export</div>
			<Button onClick={handleMarkdownDownload} type="button" />
		</label>
	</TabItem>
);
