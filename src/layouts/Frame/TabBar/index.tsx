import { FileImport } from "~/components/atoms/icon/FileImportIcon/index.tsx";
import { AddSection } from "~/components/atoms/icon/AddSectionIcon/index.tsx";
import { TemplateSection } from "~/components/atoms/icon/TemplateIcon/index.tsx";
import { ClearIcon } from "~/components/atoms/icon/ClearIcon/index.tsx";
import { useAddSection } from "~/hooks/useAddSection.ts";
import { useRenderDownloadButton } from "~/features/drag-and-drop/ui/useRenderDownloadButton.tsx";
import { useOnFileInputChange } from "~/hooks/useOnFileInputChange.ts";

export const TabBar = (): JSX.Element => {
	const { handleAddSection } = useAddSection();

	const { DownloadButton } = useRenderDownloadButton();
	const { onFileInputChange } = useOnFileInputChange();
	return (
		<div className="py-2 px-6 flex justify-between">
			<div className="flex gap-6">
				<AddSection handleAddSection={handleAddSection} />
				<TemplateSection />
				<ClearIcon />
			</div>

			<div className="flex gap-6">
				<FileImport handleClick={onFileInputChange} />
				<DownloadButton />
			</div>
		</div>
	);
};
