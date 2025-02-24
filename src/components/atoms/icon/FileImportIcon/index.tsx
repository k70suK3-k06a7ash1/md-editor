import type { Dispatch, ChangeEvent } from "react";
import { FileInput } from "lucide-react";
import { Spacer } from "../../Spacer";
import { TabItem } from "../../../../styles/tabItem";
type Props = {
	handleClick: Dispatch<ChangeEvent<HTMLInputElement>>;
};
export const FileImport = ({ handleClick }: Props) => (
	<TabItem>
		<label className="cursor-pointer flex h-full items-center">
			<i>
				<FileInput className="text-xl" />
			</i>
			<Spacer horizontal size={4} />
			<div>Import</div>
			<input
				type="file"
				accept=".md"
				onChange={handleClick}
				className="hidden"
			/>
		</label>
	</TabItem>
);
