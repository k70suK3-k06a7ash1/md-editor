import { FileExport } from "@/components/atoms/icon/FileExportIcon/index";
import { useMarkdownContext } from "@/context/MarkdownContext";

export const useRenderDownloadButton = () => {
	const { markdown: contents } = useMarkdownContext();

	const joinContents = contents?.map(({ content }) => content).join("\n");
	const handleMarkdownDownload = () => {
		const blob = new Blob([joinContents], {
			type: "text/plain",
		});
		const link = document.createElement("a");
		link.download = "README.md";
		link.href = URL.createObjectURL(blob);
		link.click();
		URL.revokeObjectURL(link.href);
	};

	const DownloadButton = () => (
		<FileExport handleMarkdownDownload={handleMarkdownDownload} />
	);

	return { DownloadButton, handleMarkdownDownload };
};
