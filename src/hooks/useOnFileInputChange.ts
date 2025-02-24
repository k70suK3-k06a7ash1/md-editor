import { useMakeContents } from "@/hooks/useMakeContents";
import { useMarkdownContext } from "@/context/MarkdownContext";

export const useOnFileInputChange = () => {
	const { makeContents } = useMakeContents();
	const { setMarkdown: set } = useMarkdownContext();
	const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const reader = new FileReader();
		const file: FileList | null = event.target.files;

		if (file instanceof FileList) {
			reader.readAsText(file[0]);
			reader.onload = (e: ProgressEvent<FileReader>) => {
				set(makeContents(String(e?.target?.result)));
			};
		}
	};

	return { onFileInputChange };
};
